const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const stream = require('./ws/stream');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/videoRouter');
const translateRouter = require('./routes/translateRouter');
const flashcardRouter = require('./routes/flashcardRouter');
const profileRouter = require('./routes/profileRouter');
const topicRouter = require('./routes/topicRouter');
const chatRoutes = require('./routes/chat');
const i18n = require('./public/js/i18n');
const cookieParser = require('cookie-parser');
const listEndpoints = require('express-list-endpoints');


const socket = require('./controllers/socketController');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const session = require('express-session');
require('dotenv').config();
app.use(cookieParser());
app.use(i18n.init);

app.use(authRoutes);

// Middleware đặt ngôn ngữ dựa trên cookie
app.use((req, res, next) => {
    const lang = req.cookies.lang || 'en'; // Ngôn ngữ mặc định là tiếng Anh
    req.setLocale(lang);
    next();
});

// Middleware để parse body của request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cấu hình đường dẫn tĩnh

app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public/dist', express.static(path.join(__dirname, 'public', 'dist')));
app.use(session({
    secret: process.env.SESSION_SECRET, // Sử dụng chuỗi bí mật từ .env
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } //session hết hạn sau 24h
}));

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Định nghĩa các route
app.use('/auth', authRoutes);
app.use('/', videoRoutes);
app.use('/', translateRouter);
app.use('/', flashcardRouter);
// app.use('/chat', videoRoutes);
app.use('/profile', profileRouter);
app.use('/', topicRouter);
app.use('/', chatRoutes);


const profileController = require('./controllers/profileController')
app.get('/profile', profileController.getProfilePage);
app.post('/profile/update', profileController.updateProfile);
app.post('/profile/changePassword', profileController.changePassword);

// Route cho trang chủ để render login.ejs
app.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/', (req, res) => {
    res.render('register', { title: 'Register' });
});

app.get('/callVideo', (req, res) => {
    res.render('callVideo');
    // res.redirect('/callVideo');
});


app.get('/profile', (req, res) => {
    res.render('profile', { title: 'Profile' });
});
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Cấu hình WebSocket
io.on('connection', (socket) => {
    console.log('A user connected');
    const userId = socket.handshake.query.userId; // Lấy userId từ query khi kết nối
    if (userId) {
        socket.join(userId); // Tham gia phòng dựa trên userId
        console.log(`User ${userId} joined room`);
    }
    socket.on('sendMessage', async(data) => {
        try {
            // Lưu tin nhắn vào cơ sở dữ liệu
            const response = await fetch('http://localhost:3000/chat/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const savedMessage = await response.json();

            // Gửi tin nhắn đến tất cả các client
            io.to(data.receiver_id).emit('receiveMessage', savedMessage);
            socket.emit('sendMessage', savedMessage);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


// Khởi động server
const PORT = 3000;
server.listen(PORT, () => {
    socket(server);
    console.log(listEndpoints(app));
    console.log(`Server is running on http://localhost:${PORT}`);

});