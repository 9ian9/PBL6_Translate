const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const Topic = require('../models/Topic'); // Đường dẫn tới mô hình Topic


// Route để hiển thị trang đăng nhập (GET request)
//router.get('/login', authController.getLoginPage);

// Route để xử lý đăng nhập (POST request)
router.post('/login', authController.loginPage);

// Route cho trang login
router.get('/login', authController.getLoginPage);

router.get('/home', authController.getHomePageAndTopics)
router.get('/logout', authController.logout);
// Route GET để hiển thị trang đăng ký
router.get('/register', authController.getRegisterPage);

// Route POST để xử lý đăng ký
router.post('/register', authController.register);

module.exports = router;