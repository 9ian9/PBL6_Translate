const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/call', videoController.getCallPage);
router.post('/start-call', videoController.startCall);

// Route để hiển thị trang video.ejs
router.get('/video', videoController.getVideoPage);
router.get('/room',videoController.getRoomPage);

module.exports = router;