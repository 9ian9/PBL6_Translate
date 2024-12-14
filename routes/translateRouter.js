const express = require('express');
const router = express.Router();
const translateController = require('../controllers/translateController');

// Route để hiển thị trang dịch (GET)
router.get('/translate', translateController.getTranslatePage); // Đảm bảo route này đúng cho GET

// Route để hiển thị trang từ vựng (GET)
// router.get('/vocabulary', translateController.getVocabularyPage); // Đảm bảo route này đúng cho trang từ vựng

// Route API để dịch văn bản (POST)
// router.post('/translate', translateController.translateText); // Chỉ cho POST request

module.exports = router;