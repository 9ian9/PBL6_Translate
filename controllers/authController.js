const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async(req, res) => {
    const { username, password } = req.body;
    //mật khẩu mã hóa
    // try {
    //     const user = await User.findOne({ where: { username } });
    //     if (user) {
    //         const isMatch = bcrypt.compareSync(password, user.password);
    //         if (isMatch) {
    //             res.send('Login successful');
    //         } else {
    //             res.send('Invalid username or password');
    //         }
    //     } else {
    //         res.send('User not found');
    //     }
    // } catch (error) {
    //     console.log(error); // In ra lỗi để kiểm tra
    //     res.status(500).send('Server error');
    // }
    try {
        const user = await User.findOne({ where: { username } });
        if (user) {
            // So sánh trực tiếp mật khẩu nhập vào với mật khẩu trong cơ sở dữ liệu
            if (password === user.password) {
                res.send('Login successful');
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