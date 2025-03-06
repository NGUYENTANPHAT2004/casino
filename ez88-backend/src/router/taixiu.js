const express = require('express');
const router = express.Router();
const taiXiuController = require('../controllers/taiXiuController');

router.get('/latest', taiXiuController.getLatestTaiXiu);
router.post('/bet', taiXiuController.placeBet);
router.post('result', taiXiuController.calculateResult);
router.get('/history/:userId', taiXiuController.getBetHistory);
module.exports = router;
