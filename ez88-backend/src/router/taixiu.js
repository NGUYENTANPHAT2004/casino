const express = require('express');
const router = express.Router();
const taiXiuController = require('../controllers/taiXiuController');

router.get('/latest', taiXiuController.getLatestTaiXiu);

module.exports = router;
