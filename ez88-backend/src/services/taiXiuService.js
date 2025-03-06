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

module.exports = { getLatestResult, createNewRound };
