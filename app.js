const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
//const socketIO = require('socket.io');
const { Server } = require('socket.io');
const stream = require('./ws/stream');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/videoRouter');
const translateRouter = require('./routes/translateRouter');
const flashcardRouter = require('./routes/flashcardRouter');
const profileRouter = require('./routes/profileRouter');

const app = express();
//const server = http.Server(app);
//const io = socketIO(server);
const server = http.createServer(app);
const io = new Server(server);
require('./ws/videocall/socket')(io);
app.use(authRoutes);

const videoApiRoutes = require('./views/api/video');
app.use('/api/video', videoApiRoutes);


const videocallRoutes = require('./routes/videocallRouter');
const socket = require('./ws/videocall/socket');
app.use('/videocall', videocallRoutes);


// Middleware để parse body của request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cấu hình đường dẫn tĩnh
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));


// Cấu hình favicon
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Định nghĩa các route
app.use('/auth', authRoutes);
app.use('/video', videoRoutes);
app.use('/translate', translateRouter);
app.use('/flashcards', flashcardRouter);
app.use('/chat', videoRoutes);
app.use('/profile', profileRouter);
app.use('/room', videoRoutes);



// Route cho trang chủ để render login.ejs
app.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/', (req, res) => {
    res.render('register', { title: 'Register' });
});
// Định nghĩa route để hiển thị video.ejs
app.get('/video', (req, res) => {
    res.render('video');  // Đảm bảo rằng video.ejs có trong thư mục views
});
app.get('/chat', (req, res) => {
    res.render('chat');  // Đảm bảo rằng video.ejs có trong thư mục views
});
app.get('/room', (req, res) => {
    res.render('room');  // Đảm bảo rằng video.ejs có trong thư mục views
});

// Route cho trang translate
app.get('/translate', (req, res) => {
    res.render('translate', { title: 'Translate' });
});

// Route cho trang vocabulary
app.get('/vocabulary', (req, res) => {
    res.render('vocabulary', { title: 'Vocabulary' });
});
app.get('/flashcard', (req, res) => {
    res.render('flashcard', { title: 'Flashcard' });
});
app.get('/profile', (req, res) => {
    res.render('profile', { title: 'Profile' });
});



// Cấu hình WebSocket
io.of('/stream').on('connection', stream);


// Khởi động server
const PORT = 5000;
server.listen(PORT, () => {
    socket(server);
    console.log(`Server is running on http://localhost:${PORT}`);
});