import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import "./TaiXiuBetModal.scss";

const socket = io("http://localhost:5000");

export default function TaiXiuBetModal({ isOpen, onClose }) {
  const [userId] = useState("player123");
  const [amount, setAmount] = useState("");
  const [choice, setChoice] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [roundStartTime, setRoundStartTime] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [taiBet, setTaiBet] = useState(0);
  const [xiuBet, setXiuBet] = useState(0);
  const [userBalance, setUserBalance] = useState(10000000);
  const [gameHistory, setGameHistory] = useState([
    { id: 1, result: "Tài", total: 11 },
    { id: 2, result: "Xỉu", total: 8 },
    { id: 3, result: "Tài", total: 12 },
    { id: 4, result: "Tài", total: 13 },
    { id: 5, result: "Xỉu", total: 9 },
  ]);
  const [result, setResult] = useState(null);
  const [diceValues, setDiceValues] = useState([1, 1, 1]);
  const [diceRotation, setDiceRotation] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [betHistory, setBetHistory] = useState([
    { time: "14:25", choice: "Tài", amount: 500000, result: "Thắng", profit: 475000 },
    { time: "14:20", choice: "Xỉu", amount: 200000, result: "Thua", profit: -200000 },
  ]);
  const [showResult, setShowResult] = useState(false);
  const [lastWinners, setLastWinners] = useState([
    { user: "VIP_Player99", amount: 5000000 },
    { user: "GoldDragon", amount: 2500000 },
    { user: "LuckyKing", amount: 1800000 },
  ]);

  const chatRef = useRef(null);
  const quickAmounts = [100000, 500000, 1000000, 5000000];
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Đồng bộ countdown dựa trên startTime từ backend (phiên kéo dài 60s)
  useEffect(() => {
    if (roundStartTime) {
      const timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - roundStartTime.getTime()) / 1000);
        const remaining = Math.max(0, 60 - elapsed);
        setCountdown(remaining);
        if (remaining === 0) {
          // Khi hết thời gian đặt cược, trigger animation nếu chưa có kết quả từ backend
          if (!result) rollDiceAnimation();
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [roundStartTime, result]);

  // Lấy dữ liệu cược tổng khi modal mở
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/taixiu/latest");
        const { bets } = res.data;
        const taiTotal = bets.filter((b) => b.choice === "Tài").reduce((acc, b) => acc + b.amount, 0);
        const xiuTotal = bets.filter((b) => b.choice === "Xỉu").reduce((acc, b) => acc + b.amount, 0);
        setTaiBet(taiTotal);
        setXiuBet(xiuTotal);
      } catch (error) {
        console.error("Không thể lấy dữ liệu:", error);
      }
    };
    fetchData();
  }, [isOpen]);

  // Xử lý chat realtime
  useEffect(() => {
    socket.emit("requestChatHistory");
    socket.on("chatHistory", (history) => {
      setMessages(history);
      scrollToBottom();
    });
    socket.on("newMessage", (message) => {
      setMessages((prev) => [...prev, message]);
      scrollToBottom();
    });
    return () => {
      socket.off("chatHistory");
      socket.off("newMessage");
    };
  }, []);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      socket.emit("sendMessage", { userId, content: newMessage });
      setNewMessage("");
    }
  };

  // Lắng nghe event từ server
  useEffect(() => {
    socket.on("taixiuUpdate", (data) => {
      // Đồng bộ thời gian phiên mới
      if (data.startTime) {
        const start = new Date(data.startTime);
        setRoundStartTime(start);
        setCountdown(60);
        setResult(null); // reset kết quả cũ
      }
      // Nếu server đóng cược, không cho đặt cược thêm
      if (data.bettingClosed) {
        // Bạn có thể hiển thị thông báo "Đã đóng cược" tại đây nếu muốn
      }
      // Nếu server gửi kết quả cuối cùng
      if (data.result && data.result !== "Đang chờ...") {
        // Cập nhật kết quả, tổng điểm và các giá trị xúc xắc (nếu có)
        setResult({ result: data.result, total: data.total });
        if (data.dice) {
          setDiceValues(data.dice);
          setDiceRotation(getDiceRotation(data.dice));
        }
        showGameResult({ result: data.result, total: data.total, dice: data.dice });
      }
    });
    return () => {
      socket.off("taixiuUpdate");
    };
  }, []);

  // Nếu chưa có dữ liệu xúc xắc từ backend, hiển thị animation local (chỉ để người chơi thấy hiệu ứng)
  const rollDiceAnimation = () => {
    setIsRolling(true);
    setShowResult(false);
    const rollInterval = setInterval(() => {
      setDiceRotation([
        { x: Math.floor(Math.random() * 360), y: Math.floor(Math.random() * 360) },
        { x: Math.floor(Math.random() * 360), y: Math.floor(Math.random() * 360) },
        { x: Math.floor(Math.random() * 360), y: Math.floor(Math.random() * 360) },
      ]);
    }, 100);
    setTimeout(() => {
      clearInterval(rollInterval);
      // Nếu backend chưa trả kết quả, vẫn hiển thị kết quả local tạm thời
      const localDice = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      setDiceValues(localDice);
      setDiceRotation(getDiceRotation(localDice));
      setIsRolling(false);
      const total = localDice.reduce((a, b) => a + b, 0);
      const localResult = total >= 11 ? "Tài" : "Xỉu";
      // Cập nhật lịch sử game
      setGameHistory((prev) => [
        { id: prev.length + 1, result: localResult, total },
        ...prev.slice(0, 19),
      ]);
      showGameResult({ dice: localDice, total, result: localResult });
    }, 2000);
  };

  const getDiceRotation = (values) => {
    const rotations = [
      { x: 0, y: 0 },      // 1
      { x: -90, y: 0 },    // 2
      { x: 0, y: 90 },     // 3
      { x: 0, y: -90 },    // 4
      { x: 90, y: 0 },     // 5
      { x: 180, y: 0 },    // 6
    ];
    return values.map(val => rotations[val - 1]);
  };

  // Hiển thị kết quả game và cập nhật lịch sử cược
  const showGameResult = (resultData) => {
    setResult(resultData);
    setShowResult(true);
    if (choice) {
      const isWin = choice === resultData.result;
      const profit = isWin ? parseInt(amount) * 0.95 : -parseInt(amount);
      setBetHistory((prev) => [
        {
          time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
          choice,
          amount: parseInt(amount),
          result: isWin ? "Thắng" : "Thua",
          profit,
        },
        ...prev,
      ]);
      setUserBalance((prev) => prev + profit);
      setChoice("");
      setAmount("");
    }
  };

  // Đặt cược
  const placeBet = async () => {
    if (!amount || !choice)
      return alert("Vui lòng nhập số tiền và chọn Tài hoặc Xỉu!");
    if (parseInt(amount) > userBalance) return alert("Số dư không đủ!");
    if (countdown < 5) return alert("Hết thời gian đặt cược!");
    try {
      await axios.post("http://localhost:5000/api/taixiu/bet", {
        userId,
        amount: parseInt(amount),
        choice: choice === "tai" ? "Tài" : "Xỉu",
      });
      choice === "tai"
        ? setTaiBet((prev) => prev + parseInt(amount))
        : setXiuBet((prev) => prev + parseInt(amount));
      alert("Đặt cược thành công!");
    } catch (error) {
      console.error("Lỗi đặt cược:", error);
      alert("Đặt cược thất bại!");
    }
  };

  const handleQuickAmount = (value) => setAmount(value.toString());
  const formatCurrency = (value) => new Intl.NumberFormat("vi-VN").format(value);

  return (
    <div className={`taixiu-modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="taixiu-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="taixiu-header">
          <div className="logo-container">
            <div className="logo">EZ88</div>
            <h2>Tài Xỉu</h2>
          </div>
          <div className="user-info">
            <div className="user-id">{userId}</div>
            <div className="user-balance">{formatCurrency(userBalance)} VNĐ</div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="countdown-container">
          <div className="countdown-label">Đóng cược sau</div>
          <div className={`countdown ${countdown <= 10 ? "urgent" : ""}`}>{countdown}s</div>
        </div>

        <div className="taixiu-main-container">
          <div className="taixiu-left-panel">
            <div className="game-history-container">
              <h3>Lịch sử phiên</h3>
              <div className="game-history">
                {gameHistory.slice(0, 10).map((game) => (
                  <div key={game.id} className={`history-item ${game.result === "Tài" ? "tai" : "xiu"}`}>
                    {game.total}
                  </div>
                ))}
              </div>
            </div>
            <div className="betting-history">
              <h3>Lịch sử cược</h3>
              <div className="betting-table">
                <table>
                  <thead>
                    <tr>
                      <th>Thời gian</th>
                      <th>Cược</th>
                      <th>Tiền cược</th>
                      <th>Kết quả</th>
                      <th>Lãi/Lỗ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {betHistory.map((bet, idx) => (
                      <tr key={idx} className={bet.result === "Thắng" ? "win" : "lose"}>
                        <td>{bet.time}</td>
                        <td>{bet.choice}</td>
                        <td>{formatCurrency(bet.amount)}</td>
                        <td>{bet.result}</td>
                        <td className={bet.profit > 0 ? "profit" : "loss"}>
                          {bet.profit > 0 ? "+" : ""}{formatCurrency(bet.profit)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="taixiu-center-panel">
            <div className="bet-section">
              <div className="choice-container">
                <button className={`choice tai ${choice === "tai" ? "selected" : ""}`} onClick={() => setChoice("tai")}>
                  <div className="choice-label">TÀI</div>
                  <div className="dice-indicators">
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                  </div>
                  <div className="total-bet">{formatCurrency(taiBet)} VNĐ</div>
                </button>
                <button className={`choice xiu ${choice === "xiu" ? "selected" : ""}`} onClick={() => setChoice("xiu")}>
                  <div className="choice-label">XỈU</div>
                  <div className="dice-indicators">
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                  </div>
                  <div className="total-bet">{formatCurrency(xiuBet)} VNĐ</div>
                </button>
              </div>
              <div className="betting-controls">
                <div className="amount-input-container">
                  <input
                    type="text"
                    placeholder="Nhập số tiền cược"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                  />
                  <div className="quick-amounts">
                    {quickAmounts.map((amt) => (
                      <button key={amt} onClick={() => handleQuickAmount(amt)}>
                        {formatCurrency(amt)}
                      </button>
                    ))}
                  </div>
                </div>
                <button className={`btn-bet ${!choice || !amount ? "disabled" : ""}`}
                  onClick={placeBet} disabled={!choice || !amount || countdown < 5}>
                  Đặt Cược
                </button>
              </div>
            </div>
            <div className="dice-arena">
              <div className="dice-container">
                {diceRotation.map((rotation, i) => (
                  <div key={i} className={`dice ${isRolling ? "rolling" : ""}`}
                    style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
                    <div className="face front"><div className="dice-dot"></div></div>
                    <div className="face back">
                      <div className="dice-dots six">
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                      </div>
                    </div>
                    <div className="face right">
                      <div className="dice-dots five">
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                      </div>
                    </div>
                    <div className="face left">
                      <div className="dice-dots two">
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                      </div>
                    </div>
                    <div className="face top">
                      <div className="dice-dots three">
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                      </div>
                    </div>
                    <div className="face bottom">
                      <div className="dice-dots four">
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                        <div className="dice-dot"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {result && (
                <div className="dice-result">
                  <div className={`result-display ${result.result === "Tài" ? "tai" : "xiu"}`}>
                    <div className="result-title">{result.result}</div>
                    <div className="result-total">{result.total}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="taixiu-right-panel">
            <div className="top-winners">
              <h3>BXH Thắng Lớn</h3>
              <div className="winners-list">
                {lastWinners.map((winner, idx) => (
                  <div key={idx} className="winner-item">
                    <div className="winner-rank">{idx + 1}</div>
                    <div className="winner-name">{winner.user}</div>
                    <div className="winner-amount">+{formatCurrency(winner.amount)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chat-section">
              <h3>Trò chuyện</h3>
              <div className="chat-messages" ref={chatRef}>
                {messages.map((msg, idx) => (
                  <div key={idx} className="chat-message">
                    <span className="chat-time">
                      {new Date(msg.createdAt).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}
                    </span>
                    <span className="chat-user">{msg.user}:</span>
                    <span className="chat-text">{msg.content}</span>
                  </div>
                ))}
              </div>
              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Nhập tin nhắn..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button className="chat-send" onClick={handleSendMessage}>
                  <span>Gửi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
