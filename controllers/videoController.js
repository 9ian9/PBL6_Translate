exports.getCallPage = (req, res) => {
    res.render('video', { title: 'Video Call' });
};

exports.startCall = (req, res) => {
    // Logic để bắt đầu cuộc gọi video
    res.send('Starting video call...');
};