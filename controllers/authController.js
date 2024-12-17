const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async(req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ where: { username } });
        if (user) {
            // So sánh trực tiếp mật khẩu nhập vào với mật khẩu trong cơ sở dữ liệu
            if (password === user.password) {

                req.session.user = {
                    username: user.username,
                    id: user.id,
                    
                };

                res.render('home', { title: 'Home', username: user.username });
                console.log('Session after login:', req.session.user);

                
                //res.send('Login successful');
            } else {
                res.send('Invalid username or password');
            }
        } else {
            res.send('User not found');
        }
    } catch (error) {
        console.log(error); // In ra lỗi để kiểm tra
        res.status(500).send('Server error');
    }
};

exports.getLoginPage = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.getRegisterPage = (req, res) => {
    res.render('register', { title: 'Đăng ký tài khoản' });
};

exports.register = async (req, res) => {
    const { email, username, password, confirmPassword } = req.body;

    // Kiểm tra các trường không được để trống
    if (!email || !username || !password || !confirmPassword) {
        return res.status(400).send('Vui lòng điền đầy đủ thông tin!');
    }

    // Kiểm tra tính hợp lệ của email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('Email không hợp lệ!');
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
        return res.status(400).send('Mật khẩu không khớp!');
    }

    try {
        // Kiểm tra xem email hoặc username đã được sử dụng chưa
        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).send('Email đã được sử dụng!');
        }

        const existingUsername = await User.findOne({
            where: { username }
        });

        if (existingUsername) {
            return res.status(400).send('Tên người dùng đã tồn tại!');
        }

        // Mã hóa mật khẩu
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu người dùng mới vào cơ sở dữ liệu
        await User.create({
            email,
            username,
            password
        });

        // Chuyển hướng sang trang đăng nhập sau khi đăng ký thành công
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Đã xảy ra lỗi, vui lòng thử lại sau!');
    }
};
