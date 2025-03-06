const taiXiuService = require('../services/taiXiuService');
const TaiXiu = require('../model/TaiXiu');
const getLatestTaiXiu = async (req, res) => {
    try {
        const latest = await taiXiuService.getLatestResult();
        res.json(latest);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};
const placeBet = async (req, res) => {
    try {
        console.log("📩 Nhận cược:", req.body);

        const { userId, amount, choice } = req.body;

        if (!userId || !amount || !choice) {
            return res.status(400).json({ message: "Thiếu thông tin cược!" });
        }

        if (!["Tài", "Xỉu"].includes(choice)) {
            return res.status(400).json({ message: "Lựa chọn cược không hợp lệ! (Chỉ nhận 'Tài' hoặc 'Xỉu')" });
        }

        // 🔥 Lấy vòng chơi mới nhất
        const latestRound = await taiXiuService.getLatestResult();
        if (!latestRound) {
            return res.status(400).json({ message: "Không có vòng cược nào đang diễn ra!" });
        }

        // 🔥 Kiểm tra nếu đã hết thời gian đặt cược (10 giây cuối)
        const now = new Date();
        const timeLeft = (latestRound.createdAt.getTime() + 60000) - now.getTime(); // 60s mỗi vòng
        if (timeLeft <= 10000) {
            return res.status(400).json({ message: "Đã hết thời gian đặt cược! (Chỉ được cược trong 50 giây đầu tiên)" });
        }

        // 🔥 Thêm đặt cược vào vòng mới nhất
        latestRound.bets.push({ user: userId, amount, choice });

        // Lưu vào MongoDB
        await latestRound.save();

        console.log(`✅ Cược thành công vào vòng ${latestRound.round}:`, latestRound.bets);

        res.json({ message: "Đặt cược thành công!", round: latestRound.round, bets: latestRound.bets });
    } catch (error) {
        console.error("❌ Lỗi khi đặt cược:", error);
        res.status(500).json({ message: "Lỗi server", error: error.toString() });
    }
};
const getBetHistory = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: "Thiếu userId!" });
        }

        // 🔥 Lấy tất cả vòng chơi mà người dùng này đã cược
        const betHistory = await TaiXiu.find({ "bets.user": userId })
            .sort({ round: -1 }) // Sắp xếp từ mới nhất đến cũ nhất
            .select("round result bets.createdAt") // Chỉ lấy các thông tin cần thiết

        if (!betHistory.length) {
            return res.status(404).json({ message: "Người chơi chưa có lịch sử cược!" });
        }

        res.json({ userId, history: betHistory });
    } catch (error) {
        console.error("❌ Lỗi khi lấy lịch sử cược:", error);
        res.status(500).json({ message: "Lỗi server", error: error.toString() });
    }
};
const getRecentResults = async (req, res) => {
    try {
        // 🔥 Lấy 13 vòng gần nhất, chỉ lấy vòng đã có kết quả
        const recentRounds = await TaiXiu.find({ result: { $ne: "Đang chờ..." } })
            .sort({ round: -1 }) // Sắp xếp từ mới nhất đến cũ nhất
            .limit(13) // Chỉ lấy 13 vòng gần nhất
            .select("round result createdAt"); // Chỉ lấy các trường cần thiết

        if (!recentRounds.length) {
            return res.status(404).json({ message: "Chưa có kết quả vòng nào!" });
        }

        res.json({ recentRounds });
    } catch (error) {
        console.error("❌ Lỗi khi lấy kết quả 13 vòng gần nhất:", error);
        res.status(500).json({ message: "Lỗi server", error: error.toString() });
    }
};
const getAllResults = async (req, res) => {
    try {
        // 🔥 Lấy tất cả vòng chơi có kết quả
        const allRounds = await TaiXiu.find({ result: { $ne: "Đang chờ..." } })
            .sort({ round: -1 }) // Sắp xếp từ mới nhất đến cũ nhất
            .select("round result createdAt"); // Chỉ lấy các trường cần thiết

        if (!allRounds.length) {
            return res.status(404).json({ message: "Chưa có kết quả vòng nào!" });
        }

        res.json({ allRounds });
    } catch (error) {
        console.error("❌ Lỗi khi lấy tất cả kết quả:", error);
        res.status(500).json({ message: "Lỗi server", error: error.toString() });
    }
};

module.exports = { getLatestTaiXiu, placeBet,getBetHistory,getRecentResults,getAllResults };


