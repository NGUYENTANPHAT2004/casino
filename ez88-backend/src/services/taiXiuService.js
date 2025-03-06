const TaiXiu = require('../model/TaiXiu');

// Tạo kết quả ngẫu nhiên
const generateTaiXiuResult = () => {
    return Math.random() < 0.5 ? "Tài" : "Xỉu";
};

// Lấy kết quả mới nhất
const getLatestResult = async () => {
    return await TaiXiu.findOne().sort({ round: -1 });
};

// Tạo vòng mới mỗi phút
const createNewRound = async () => {
    const latestRound = await getLatestResult();
    const nextRound = latestRound ? latestRound.round + 1 : 1;
    
    const newResult = generateTaiXiuResult();
    const newGame = new TaiXiu({ round: nextRound, result: newResult });
    await newGame.save();
    
    return newGame;
};
const calculateResult = async (roundId) => {
    const round = await TaiXiu.findById(roundId);
    if (!round) {
        throw new Error("Vòng chơi không tồn tại");
    }

    const result = round.result; // Kết quả của vòng chơi (Tài/Xỉu)

    // Tính toán thắng thua cho từng người chơi
    round.bets.forEach(bet => {
        if (bet.choice === result) {
            // Người chơi thắng, trả lại tiền cược và thêm tiền thưởng
            bet.winAmount = bet.amount * 2; // Ví dụ: thưởng gấp đôi
        } else {
            // Người chơi thua, mất tiền cược
            bet.winAmount = 0;
        }
    });

    await round.save();
    return round;
};
const getBetHistory = async (userId) => {
    const rounds = await TaiXiu.find({ 'bets.user': userId });
    const history = rounds.map(round => {
        const bet = round.bets.find(b => b.user === userId);
        return {
            round: round.round,
            betAmount: bet.amount,
            choice: bet.choice,
            result: round.result,
            winAmount: bet.winAmount || 0
        };
    });
    return history;
};

module.exports = { getLatestResult, createNewRound,calculateResult,getBetHistory  };
