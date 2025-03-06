const socketIo = require('socket.io');

let io;
const initSocket = (server) => {
    io = socketIo(server, { cors: { origin: "*" } });
    return io;
};

const getIo = () => {
    if (!io) {
        throw new Error("Socket.io chưa được khởi tạo!");
    }
    return io;
};

module.exports = { initSocket, getIo };
