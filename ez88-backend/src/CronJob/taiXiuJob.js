const cron = require('node-cron');
const { createNewRound, getLatestResult } = require('../services/taiXiuService');
const { getIo } = require('../config/socket');

cron.schedule('* * * * *', async () => {
    const io = getIo();

    // 🔥 Bắt đầu vòng mới mà chưa có kết quả
    const newGame = await createNewRound();
    console.log(`🎲 Bắt đầu vòng ${newGame.round} - Đang chờ cược...`);

    io.emit('taixiuUpdate', { ...newGame.toObject(), result: "Đang chờ...", bettingClosed: false });

    // 🔥 Sau 50 giây: Thông báo đóng cược
    setTimeout(async () => {
        const latestRound = await getLatestResult();
        console.log(`⏳ Đóng cược cho vòng ${latestRound.round}`);
        io.emit('taixiuUpdate', { ...latestRound.toObject(), bettingClosed: true });
    }, 50000);

    // 🔥 Sau 60 giây: Tính kết quả & phát cho WebSocket
    setTimeout(async () => {
        const latestRound = await getLatestResult();
        if (!latestRound) return;

        // Tính kết quả (Tài hoặc Xỉu)
        const newResult = Math.random() < 0.5 ? "Tài" : "Xỉu";
        latestRound.result = newResult;
        await latestRound.save();

        console.log(`🏆 Kết thúc vòng ${latestRound.round}: ${latestRound.result}`);
        io.emit('taixiuUpdate', latestRound);
    }, 60000);
});
