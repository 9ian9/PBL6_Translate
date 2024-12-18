const User = require('../models/User');
const bcrypt = require('bcrypt');

const Topic = require('../models/Topic'); // Đường dẫn tới mô hình Topic

exports.loginPage = async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (user) {
            if (password === user.password) {
                req.session.user = {
                    username: user.username,
                    id: user.id,
                };
                console.log('Session after login:', req.session.user);
                // Redirect đến trang chính với userId
                return res.redirect(`home`);
            } else {
                res.send('Invalid username or password');
            }
        } else {
            res.send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
exports.getHomePageAndTopics = async(req, res) => {
    try {
        const userId = req.session.user.id; // Lấy userId từ session
        const topics = await Topic.findAll({ where: { user_id: userId } });
        res.render('home', {
            title: 'Home',
            username: req.session.username, // Truyền thêm username để hiển thị
            userId,
            topics
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
exports.getLoginPage = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.register = async(req, res) => {
    const { email, username, password, confirmPassword } = req.body;

    // Kiểm tra các trường không được để trống
    if (!email || !username || !password || !confirmPassword) {
        return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin!" });
    }

    // Kiểm tra tính hợp lệ của email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email không hợp lệ!" });
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Mật khẩu không khớp!" });
    }

    try {
        // Kiểm tra xem email đã được sử dụng hay chưa
        const [rows] = await connection.promise().query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: "Email đã được sử dụng!" });
        }

        // Mã hóa mật khẩu
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu người dùng mới vào cơ sở dữ liệu
        await connection.promise().query(
            'INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hashedPassword]
        );

        // Trả về phản hồi thành công
        res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Đã xảy ra lỗi, vui lòng thử lại sau!" });
    }
};
exports.getRegisterPage = (req, res) => {
    res.render('register', { title: 'Đăng ký tài khoản' });
};

//logout và destroy session
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Unable to log out');
        }
        res.redirect('/login'); // Chuyển hướng về trang login sau khi đăng xuất
    });
};