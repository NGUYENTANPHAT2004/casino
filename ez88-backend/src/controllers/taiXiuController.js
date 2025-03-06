const taiXiuService = require('../services/taiXiuService');

const getLatestTaiXiu = async (req, res) => {
    try {
        const latest = await taiXiuService.getLatestResult();
        res.json(latest);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

module.exports = { getLatestTaiXiu };
