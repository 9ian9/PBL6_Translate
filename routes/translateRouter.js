const express = require('express');
const router = express.Router();
const { getTranslatePage, translateText , getVocabularyPage} = require('../controllers/translateController');

// Route để hiển thị trang dịch (GET)
router.get('/translate', getTranslatePage);  // Đảm bảo route này đúng cho GET

// Route để hiển thị trang từ vựng (GET)
router.get('/vocabulary', getVocabularyPage);  // Đảm bảo route này đúng cho trang từ vựng

// Route API để dịch văn bản (POST)
router.post('/translate', translateText);  // Chỉ cho POST request

module.exports = router;
