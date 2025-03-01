const { Server } = require("socket.io");

module.exports = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("✅ New user connected:", socket.id);

    socket.on("placeBet", (data) => {
      console.log("User placed bet:", data);
      io.emit("updateBets", data);
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });

  return io;
};
