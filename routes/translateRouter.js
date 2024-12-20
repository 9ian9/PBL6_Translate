const express = require('express');
const router = express.Router();
const translateController = require('../controllers/translateController');
// const { translateEnToVi, translateViToEn } = require('../controllers/translateController');


// Route để hiển thị trang dịch (GET)
router.get('/translate', translateController.getTranslatePage); // Đảm bảo route này đúng cho GET


// Route dịch từ Anh sang Việt
router.post('/en-to-vi', async(req, res) => {
    const { sentence } = req.body;
    const translation = await translateController.translateEnToVi(sentence);
    if (translation) {
        res.json({ input: sentence, translation });
    } else {
        res.status(500).json({ error: 'Translation failed' });
    }
});

// Route dịch từ Việt sang Anh
router.post('/vi-to-en', async(req, res) => {
    const { sentence } = req.body;
    const translation = await translateController.translateViToEn(sentence);
    if (translation) {
        res.json({ input: sentence, translation });
    } else {
        res.status(500).json({ error: 'Translation failed' });
    }
});

module.exports = router;