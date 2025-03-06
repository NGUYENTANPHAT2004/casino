const taiXiuService = require('../services/taiXiuService');

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
        const { roundId, userId, amount, choice } = req.body;

        // Kiểm tra xem vòng chơi có tồn tại không
        const round = await TaiXiu.findById(roundId);
        if (!round) {
            return res.status(404).json({ message: "Vòng chơi không tồn tại" });
        }

        // Thêm đặt cược vào vòng chơi
        round.bets.push({ user: userId, amount, choice });
        await round.save();

        res.json({ message: "Đặt cược thành công", round });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};
const calculateResult = async (req, res) => {
    try {
        const { roundId } = req.body;
        const round = await taiXiuService.calculateResult(roundId);
        res.json({ message: "Tính toán kết quả thành công", round });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};
const getBetHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const history = await taiXiuService.getBetHistory(userId);
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

module.exports = { getLatestTaiXiu, placeBet, calculateResult, getBetHistory };


