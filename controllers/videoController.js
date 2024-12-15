exports.getCallPage = (req, res) => {
    const { userId } = req.query; // Lấy userId từ query string
    res.render('video', { title: 'Video Call', userId });
};

exports.startCall = (req, res) => {
    // Logic để bắt đầu cuộc gọi video
    res.send('Starting video call...');
};

// Hàm hiển thị trang video.ejs
exports.getVideoPage = (req, res) => {
    const { userId } = req.query;
    // Trả về trang video.ejs
    res.render('message', { title: 'Video Call', userId });
};