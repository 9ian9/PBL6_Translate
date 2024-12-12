exports.getCallPage = (req, res) => {
    res.render('video', { title: 'Video Call' });
};

exports.startCall = (req, res) => {
    // Logic để bắt đầu cuộc gọi video
    res.send('Starting video call...');
};

// Hàm hiển thị trang video.ejs
exports.getVideoPage = (req, res) => {
    // Trả về trang video.ejs
    res.render('video');
};
exports.getRoomPage =(req, res) => {
    res.render('room');
};
