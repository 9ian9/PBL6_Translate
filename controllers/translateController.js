const axios = require('axios');

// Trang dịch thuật
exports.getTranslatePage = (req, res) => {
    const { userId } = req.query; // Lấy userId từ query string
    console.log(`Received userId from translateController: ${userId}`);
    res.render('translate', { title: 'Translate', userId });
};

// API xử lý dịch văn bản
exports.translateText = async(req, res) => {
    const { text, source, target } = req.body;

    try {
        // Gọi API dịch (thay bằng API thực tế, ví dụ Google Translate API)
        const response = await axios.post('https://api.example.com/translate', {
            text: text,
            source: source,
            target: target
        });

        // Trả kết quả dịch về cho client
        res.json({ translatedText: response.data.translatedText });
    } catch (error) {
        console.error('Error translating text:', error);
        res.status(500).json({ message: 'Đã có lỗi xảy ra khi dịch văn bản.' });
    }
};


exports.getVocabularyPage = (req, res) => {
    res.render('vocabulary', { title: 'Vocabulary' });
}