const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route để hiển thị trang đăng nhập (GET request)
//router.get('/login', authController.getLoginPage);

// Route để xử lý đăng nhập (POST request)
router.post('/login', authController.loginAndGetTopics);

// Route cho trang login
router.get('/login', authController.getLoginPage);

router.get('/logout', (req, res) => {
    // Xử lý logout, ví dụ như xóa session hoặc token
    res.redirect('/');
});
// Route GET để hiển thị trang đăng ký
router.get('/register', authController.getRegisterPage);

// Route POST để xử lý đăng ký
router.post('/register', authController.register);

module.exports = router;