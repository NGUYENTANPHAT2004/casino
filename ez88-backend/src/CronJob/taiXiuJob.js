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

        const diceValues = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
          ];
          const total = diceValues.reduce((a, b) => a + b, 0);
          const newResult = total >= 11 ? "Tài" : "Xỉu";
          // Gán vào phiên và gửi về client:
          latestRound.result = newResult;
          latestRound.dice = diceValues;
          
        latestRound.result = newResult;
        latestRound.endTime = new Date();
        await latestRound.save();
        const durationMs = latestRound.endTime - latestRound.startTime;
        const durationSec = durationMs / 1000;
        console.log(`Phiên ${latestRound.round} kéo dài ${durationSec} giây`);
        console.log(`🏆 Kết thúc vòng ${latestRound.round}: ${latestRound.result}`);
        console.log(`kq ${latestRound.dice}`);
        io.emit('taixiuUpdate', latestRound);
    }, 60000);
});
