import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import "./TaiXiuBetModal.scss";

const socket = io("http://localhost:5000");

export default function TaiXiuBetModal({ isOpen, onClose }) {
  const [userId] = useState("player123");
  const [amount, setAmount] = useState("");
  const [choice, setChoice] = useState("");
  const [countdown, setCountdown] = useState(45);
  const [isRolling, setIsRolling] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [taiBet, setTaiBet] = useState(0);
  const [xiuBet, setXiuBet] = useState(0);
  const [result, setResult] = useState(null);
  const [diceRotation, setDiceRotation] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const chatRef = useRef(null);

  // ⏰ Countdown
  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 45));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  // 🔥 Lấy vòng chơi mới nhất
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/taixiu/latest");
      const { bets } = res.data;
      const taiTotal = bets.filter((b) => b.choice === "Tài").reduce((acc, b) => acc + b.amount, 0);
      const xiuTotal = bets.filter((b) => b.choice === "Xỉu").reduce((acc, b) => acc + b.amount, 0);
      setTaiBet(taiTotal);
      setXiuBet(xiuTotal);
    };

    fetchData();
  }, [isOpen]);

  // 📨 Chat real-time
  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setChatMessages((prev) => [...prev, msg]);
      setTimeout(() => {
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 100);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, []);
  useEffect(() => {
    socket.on("taixiuUpdate", (data) => {
      if (data.bettingClosed) {
        rollDice(); // 🔥 Xúc xắc quay ngay khi đóng cược
      }

      if (data.result) {
        setResult(data.result);
      }
    });

    return () => {
      socket.off("taixiuUpdate");
    };
  }, []);
  // 🎲 Xúc xắc quay
  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      setDiceRotation([
        { x: Math.floor(Math.random() * 4) * 90, y: Math.floor(Math.random() * 4) * 90 },
        { x: Math.floor(Math.random() * 4) * 90, y: Math.floor(Math.random() * 4) * 90 },
        { x: Math.floor(Math.random() * 4) * 90, y: Math.floor(Math.random() * 4) * 90 },
      ]);
      setIsRolling(false);
    }, 1000);
  };

  // Đặt cược
  const placeBet = async () => {
    if (!amount || !choice) return alert("Vui lòng nhập số tiền và chọn Tài hoặc Xỉu!");
    try {
      await axios.post("http://localhost:5000/api/taixiu/bet", { userId, amount: parseInt(amount), choice });
      rollDice();
    } catch (error) {
      console.error("Lỗi đặt cược:", error);
      alert("Đặt cược thất bại!");
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="countdown">{countdown}</div>

        <div className="main-section">
          <div className="bet-section">
            <div className="choice-container">
              <button className={`choice tai ${choice === "tai" ? "selected" : ""}`} onClick={() => setChoice("tai")}>
                TÀI ({taiBet.toLocaleString()} VNĐ)
              </button>
              <button className={`choice xiu ${choice === "xiu" ? "selected" : ""}`} onClick={() => setChoice("xiu")}>
                XỈU ({xiuBet.toLocaleString()} VNĐ)
              </button>
            </div>

            <div className="amount-container">
              <input type="number" placeholder="Số tiền" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <button className="btn-bet" onClick={placeBet}>Đặt Cược</button>
            </div>
          </div>

          {/* 🎲 Khu vực xúc xắc */}
       {/* 🎲 Khu vực xúc xắc */}
       <div className="dice-container">
            {diceRotation.map((rotation, i) => (
              <div key={i} className={`dice ${isRolling ? "rolling" : ""}`} style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}>
                <div className="face front">⚀</div>
                <div className="face back">⚅</div>
                <div className="face right">⚄</div>
                <div className="face left">⚂</div>
                <div className="face top">⚁</div>
                <div className="face bottom">⚃</div>
              </div>
            ))}
          </div>


          {/* 💬 Khu vực chat */}
          <div className="chat-section">
            <div className="chat-messages" ref={chatRef}>
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="chat-message">
                  <b>{msg.user}:</b> {msg.message}
                </div>
              ))}
            </div>
            <input type="text" className="chat-input" placeholder="Nhập tin nhắn (Enter)" 
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  socket.emit("chatMessage", { user: userId, message: e.target.value });
                  e.target.value = "";
                }
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
