const cron = require('node-cron');
const { createNewRound } = require('../services/taiXiuService');
const { getIo } = require('../config/socket');

cron.schedule('* * * * *', async () => {
    const newGame = await createNewRound();
    console.log(`Vòng ${newGame.round}: ${newGame.result}`);

    const io = getIo(); // Lấy io mà không bị circular dependency
    io.emit('taixiuUpdate', newGame);
});
