const axios = require('axios');

// Trang dịch thuật
exports.getTranslatePage = (req, res) => {
    const { userId } = req.session.user.id;
    console.log(`Received userId from translateController: ${userId}`);
    res.render('translate', { title: 'Translate', userId });
};

// Gọi API Flask: Dịch từ Anh sang Việt
exports.translateEnToVi = async(sentence) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/translate', { sentence });
        return response.data.translation;
    } catch (error) {
        console.error('Error calling Flask API:', error.message);
        return null;
    }
};
// Gọi API Flask: Dịch từ Việt sang Anh
exports.translateViToEn = async(sentence) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/translate_vi_en', { sentence });
        return response.data.translation;
    } catch (error) {
        console.error('Error calling Flask API:', error.message);
        return null;
    }
};