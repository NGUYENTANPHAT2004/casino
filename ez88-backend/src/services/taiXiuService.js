const TaiXiu = require('../model/TaiXiu');

const getLatestResult = async () => {
    return await TaiXiu.findOne().sort({ round: -1 });
};

const createNewRound = async () => {
    const latestRound = await getLatestResult();
    const nextRound = latestRound ? latestRound.round + 1 : 1;
    const newResult = Math.random() < 0.5 ? "Tài" : "Xỉu";
    const newGame = new TaiXiu({ round: nextRound, result: newResult, bets: [] ,startTime: new Date()});
    await newGame.save();
    return newGame;
};

// ✅ Sửa lỗi: Lưu cược vào vòng mới nhất
const placeBet = async (user, amount, choice) => {
    const latestRound = await getLatestResult();
    
    if (!latestRound) return { error: "Không có vòng cược nào đang diễn ra!" };

    latestRound.bets.push({ user, amount, choice });
    
    try {
        await latestRound.save();
        return latestRound;
    } catch (error) {
        return { error: "Không thể lưu cược!" };
    }
};

module.exports = { getLatestResult, createNewRound, placeBet };
