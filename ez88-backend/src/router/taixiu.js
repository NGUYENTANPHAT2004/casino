const express = require('express');
const router = express.Router();
const taiXiuController = require('../controllers/taiXiuController');

router.get('/latest', taiXiuController.getLatestTaiXiu);
router.post('/bet', taiXiuController.placeBet);
// router.post('result', taiXiuController.calculateResult);
router.get('/history/:userId', taiXiuController.getBetHistory);
router.get('/recent-results', taiXiuController.getRecentResults); // ✅ Lấy 13 vòng gần nhất
router.get('/all-results', taiXiuController.getAllResults); // ✅ Lấy tất cả kết quả
module.exports = router;
