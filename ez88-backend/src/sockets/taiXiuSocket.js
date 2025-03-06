const taiXiuService = require('../services/taiXiuService');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on('subscribeTaiXiu', async () => {
            const latest = await taiXiuService.getLatestResult();
            socket.emit('taixiuUpdate', latest);
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};
