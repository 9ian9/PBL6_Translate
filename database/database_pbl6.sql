-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2024 at 04:04 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_pbl6`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `sender_id`, `receiver_id`, `message`, `timestamp`) VALUES
(76, 3, 1, 'Hello.', '2024-12-28 14:17:24'),
(77, 1, 3, 'Hi', '2024-12-28 14:17:34'),
(78, 3, 1, 'How are you ?', '2024-12-28 14:17:51'),
(79, 1, 3, 'I\'m fine. And you?', '2024-12-28 14:18:23'),
(80, 3, 1, 'me too.', '2024-12-28 14:18:47'),
(81, 3, 1, 'how many days off do you get?', '2024-12-28 14:19:44'),
(82, 3, 1, 'how many days off do you get for tet?', '2024-12-28 14:20:31'),
(83, 1, 3, 'What do you usually do on Tet holiday?', '2024-12-28 14:21:33'),
(84, 3, 1, 'clean the house, cook banh chung, buy peach blossoms', '2024-12-28 14:22:16'),
(85, 1, 3, 'Do you travel anywhere?', '2024-12-28 14:23:05'),
(86, 3, 1, 'No, I want to stay home with my family.', '2024-12-28 14:23:46'),
(87, 1, 3, 'wow, that\'s awesome', '2024-12-28 14:24:36'),
(89, 3, 1, 'Have a nice holiday!', '2024-12-28 14:26:34'),
(90, 1, 3, 'thank you!', '2024-12-28 14:26:53'),
(91, 4, 1, 'chào bạn', '2024-12-28 14:27:56'),
(92, 1, 4, 'chào buổi tối', '2024-12-28 14:29:27'),
(93, 4, 1, 'Bạn ăn cơm chưa ?', '2024-12-28 14:29:41'),
(94, 1, 4, 'mình ăn cơm rồi', '2024-12-28 14:33:28'),
(96, 1, 4, 'Bạn làm bài tập ngày mai chưa', '2024-12-28 14:34:21'),
(97, 4, 1, 'mình đã làm rồi, bài tập dễ lắm.', '2024-12-28 14:35:55'),
(98, 1, 4, 'ồ, bạn thật giỏi', '2024-12-28 14:36:11');

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `imgTopic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `title`, `user_id`, `imgTopic`) VALUES
(1, 'Food', 1, '/images/products/topic/food.jpg'),
(2, 'Electronic', 2, '/images/products/topic/electronic.jpg'),
(3, 'Animals', 1, '/images/products/topic/animals.jpg'),
(4, 'Sports', 1, '/images/products/topic/sports.jpg'),
(5, 'Body', 1, '/images/products/topic/body.jpg'),
(6, 'Food', 2, '/images/products/topic/food.jpg'),
(7, 'Electronic', 3, '/images/products/topic/electronic.jpg'),
(8, 'Animals', 2, '/images/products/topic/animals.jpg'),
(9, 'Sport', 2, '/images/products/topic/sports.jpg'),
(10, 'Body', 2, '/images/products/topic/body.jpg'),
(11, 'Food', 3, '/images/products/topic/food.jpg'),
(12, 'Electronic', 4, '/images/products/topic/electronic.jpg'),
(13, 'Animals', 4, '/images/products/topic/animals.jpg'),
(14, 'Sport', 4, '/images/products/topic/sports.jpg'),
(15, 'Body', 4, '/images/products/topic/body.jpg'),
(16, 'Food', 5, '/images/products/topic/food.jpg'),
(17, 'Electronic', 3, '/images/products/topic/electronic.jpg'),
(18, 'Animals', 3, '/images/products/topic/animals.jpg'),
(19, 'Sport', 3, '/images/products/topic/sports.jpg'),
(20, 'Drinks', 5, '/images/products/topic/drinks.jpg'),
(21, 'Drinks', 1, '/images/products/topic/drinks.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `first_name`, `last_name`) VALUES
(1, 'john.doe@example.com', 'giang', '123', 'Nguyen', 'Giang'),
(2, 'jane.smith@example.com', 'jane_smith', '123456', 'Jane', 'Smith'),
(3, 'user01@gmail.com', 'hongtien', '12345', 'Tien', 'Nguyen'),
(4, 'ngananh2003@gmail.com', 'ngananh', '12345', 'Anh', 'Nguyễn'),
(5, 'ainngyn@gmail.com', 'ain', '12345', 'Anh', 'Pham');

-- --------------------------------------------------------

--
-- Table structure for table `vocabularies`
--

CREATE TABLE `vocabularies` (
  `id` int(11) NOT NULL,
  `english_word` varchar(255) NOT NULL,
  `vietnamese_meaning` varchar(255) NOT NULL,
  `title_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `vocabularies`
--

INSERT INTO `vocabularies` (`id`, `english_word`, `vietnamese_meaning`, `title_id`) VALUES
(1, 'Noodles', 'Bún, phở', 1),
(2, 'Dumplings', 'Bánh bao, há cảo', 1),
(3, 'Sticky rice', 'Xôi', 1),
(4, 'Spaghetti', 'Mý ý', 1),
(5, 'Chicken drumstick', 'Đùi gà', 1),
(6, 'Spare ribs', 'Sườn non', 1),
(7, 'Beefsteak', 'Bít tết thịt bò', 1),
(8, 'Mixed grill', 'Món nướng thập cẩm', 1),
(9, 'Brownies', 'Bánh sô cô la', 1),
(10, 'Yogurt', 'sữa chua', 1),
(11, 'Cheesecake', 'bánh phô mai', 1),
(12, 'Coconut jelly', 'thạch dừa', 1),
(13, 'Doughnut', 'bánh rán', 1),
(14, 'Sorbet', 'kem trái cây', 1),
(15, 'Cookie', 'Bánh quy', 1),
(16, 'Ice cream', 'kem', 1),
(17, 'Hamburger', 'Bánh ham bơ gơ', 1),
(18, 'Chicken nugget', 'Gà không xương', 1),
(19, 'Onion ring', 'Hành tây chiên', 1),
(20, 'French fries', 'Khoai tây chiên', 1),
(21, 'Toast', 'Bánh mì nướng', 1),
(22, 'Sandwich', 'Bánh mì kẹp', 1),
(23, 'Beef soup', 'Súp bò', 1),
(24, 'Crab soup', 'Súp cua', 1),
(25, 'Salad', 'Rau trộn', 1),
(26, 'Baguette', 'Bánh mì Pháp', 1),
(27, 'Cheese biscuits', 'Bánh quy phô mai', 1),
(28, 'Rice', 'cơm', 1),
(29, 'Fried rice', 'Cơm rang', 1),
(30, 'Congee', 'Cháo', 1),
(31, 'Hotpot', 'Lẩu', 1),
(32, 'Ham', 'Giăm bông', 1),
(33, 'Fox', 'Con cáo', 3),
(34, 'Lion', 'Con sư tử', 3),
(35, 'Bear', 'Con gấu', 3),
(36, 'Elephant', 'Con voi', 3),
(37, 'Squirel', 'Con sóc', 3),
(38, 'Porcupine', 'Con nhím', 3),
(39, 'Hippopotamus', 'Con hà mã', 3),
(40, 'Raccoon', 'Con gấu mèo', 3),
(41, 'Giraffe', 'Con hươu cao cổ', 3),
(42, 'Rhinoceros', 'Con tê giác', 3),
(43, 'Jaguar', ' Con báo đốm', 3),
(44, 'Chimpanzee', 'Con hắc tinh tinh', 3),
(45, 'Donkey', 'Con lừa', 3),
(46, 'Zebra', 'Con ngựa vằng', 3),
(47, 'Panda', 'Con gấu trúc', 3),
(48, 'Radio', 'cái đài', 2),
(49, 'Record', 'đĩa hát', 2),
(50, 'Remote control', 'điều khiển từ xa', 2),
(51, 'Stereo', 'âm thanh nổi', 2),
(52, 'Speaker', 'loa', 2),
(53, 'Tripod', 'giá ba chân', 2),
(54, 'Turntable', 'máy quay đĩa hát', 2),
(55, 'TV', 'ti vi', 2),
(56, 'Antenna', 'ăng ten', 2),
(57, 'VCR', 'đầy máy video', 2),
(58, 'Video tape', 'cuộn băng hình', 2),
(59, 'wire', 'dây điện', 2),
(60, 'Zoom lens', 'ống kính thu phóng', 2),
(61, 'Audiotape', 'cuộn băng ', 2),
(62, 'Battery', 'pin', 2),
(63, 'Camera', 'máy ảnh', 2),
(64, 'Flask', 'đèn nháy', 2),
(65, 'CD player', 'đầu đĩa', 2),
(66, 'Horse racing', 'đua ngựa', 4),
(67, 'American football', 'bóng đá mỹ', 4),
(68, 'Mountaineering', 'leo núi', 4),
(69, 'Volleyball', 'bóng chuyền', 4),
(70, 'Weightlifting', 'cử tạ', 4),
(71, 'Badminton racquet', 'vợt cầu lông', 4),
(72, 'Boxing glove', 'găng tay đấm bốc', 4),
(73, 'Hockey stick', 'gậy chơi khúc côn cầu', 4),
(74, 'Running shoes', 'giày chạy', 4),
(75, 'Baseball bat', 'gậy cbóng chày', 4),
(76, 'Rugby ball', 'quả bóng bầu dục', 4),
(77, 'Golf club', 'gậy đánh gôn', 4),
(78, 'Pool cue', 'gậy chơi bida', 4),
(79, 'Ice skates', 'giày trượt băng', 4),
(80, 'Tennis racquet', 'vợt tennis', 4),
(81, 'Face', 'khuôn mặt', 5),
(82, 'Mouth', 'miệng', 5),
(83, 'Chin', 'cằm', 5),
(84, 'Neck', 'cổ', 5),
(85, 'Shoulder', 'vai', 5),
(86, 'Arm', 'cánh tay', 5),
(87, 'Upper arm', 'cánh tay phía trên', 5),
(88, 'Elbow', 'khủy tay', 5),
(89, 'Forearm', 'cẳng tay', 5),
(90, 'Armpit', 'nách', 5),
(91, 'Back', 'lưng', 5),
(92, 'Chest', 'ngực', 5),
(93, 'Waist', 'thắt lưng, eo', 5),
(94, 'Abdomen', 'bụng', 5),
(95, 'Buttocks', 'mông', 5),
(96, 'Hip', 'hông', 5),
(97, 'Leg', 'phần chân', 5),
(98, 'Thigh', 'bắp đùi', 5),
(99, 'Knee', 'đầu gối', 5),
(100, 'Calf', 'bắp chân', 5),
(101, 'Noodles', 'Bún, phở', 6),
(102, 'Dumplings', 'Bánh bao, há cảo', 6),
(103, 'Sticky rice', 'Xôi', 6),
(104, 'Spaghetti', 'Mý ý', 6),
(105, 'Chicken drumstick', 'Đùi gà', 6),
(106, 'Spare ribs', 'Sườn non', 6),
(107, 'Beefsteak', 'Bít tết thịt bò', 6),
(108, 'Mixed grill', 'Món nướng thập cẩm', 6),
(109, 'Brownies', 'Bánh sô cô la', 6),
(110, 'Yogurt', 'sữa chua', 6),
(111, 'Cheesecake', 'bánh phô mai', 6),
(112, 'Coconut jelly', 'thạch dừa', 6),
(113, 'Doughnut', 'bánh rán', 6),
(114, 'Sorbet', 'kem trái cây', 6),
(115, 'Cookie', 'Bánh quy', 6),
(116, 'Ice cream', 'kem', 6),
(117, 'Hamburger', 'Bánh ham bơ gơ', 6),
(118, 'Chicken nugget', 'Gà không xương', 6),
(119, 'Onion ring', 'Hành tây chiên', 6),
(120, 'French fries', 'Khoai tây chiên', 6),
(121, 'Toast', 'Bánh mì nướng', 6),
(122, 'Sandwich', 'Bánh mì kẹp', 6),
(123, 'Beef soup', 'Súp bò', 6),
(124, 'Crab soup', 'Súp cua', 6),
(125, 'Salad', 'Rau trộn', 6),
(126, 'Baguette', 'Bánh mì Pháp', 6),
(127, 'Cheese biscuits', 'Bánh quy phô mai', 6),
(128, 'Rice', 'cơm', 6),
(129, 'Fried rice', 'Cơm rang', 6),
(130, 'Congee', 'Cháo', 6),
(131, 'Hotpot', 'Lẩu', 6),
(132, 'Ham', 'Giăm bông', 6),
(133, 'Fox', 'Con cáo', 8),
(134, 'Lion', 'Con sư tử', 8),
(135, 'Bear', 'Con gấu', 8),
(136, 'Elephant', 'Con voi', 8),
(137, 'Squirel', 'Con sóc', 8),
(138, 'Porcupine', 'Con nhím', 8),
(139, 'Hippopotamus', 'Con hà mã', 8),
(140, 'Raccoon', 'Con gấu mèo', 8),
(141, 'Giraffe', 'Con hươu cao cổ', 8),
(142, 'Rhinoceros', 'Con tê giác', 8),
(143, 'Jaguar', ' Con báo đốm', 8),
(144, 'Chimpanzee', 'Con hắc tinh tinh', 8),
(145, 'Donkey', 'Con lừa', 8),
(146, 'Zebra', 'Con ngựa vằng', 8),
(147, 'Panda', 'Con gấu trúc', 8),
(148, 'Radio', 'cái đài', 7),
(149, 'Record', 'đĩa hát', 7),
(150, 'Remote control', 'điều khiển từ xa', 7),
(151, 'Stereo', 'âm thanh nổi', 7),
(152, 'Speaker', 'loa', 7),
(153, 'Tripod', 'giá ba chân', 7),
(154, 'Turntable', 'máy quay đĩa hát', 7),
(155, 'TV', 'ti vi', 7),
(156, 'Antenna', 'ăng ten', 7),
(157, 'VCR', 'đầy máy video', 7),
(158, 'Video tape', 'cuộn băng hình', 7),
(159, 'wire', 'dây điện', 7),
(160, 'Zoom lens', 'ống kính thu phóng', 7),
(161, 'Audiotape', 'cuộn băng ', 7),
(162, 'Battery', 'pin', 7),
(163, 'Camera', 'máy ảnh', 7),
(164, 'Flask', 'đèn nháy', 7),
(165, 'CD player', 'đầu đĩa', 7),
(166, 'Horse racing', 'đua ngựa', 9),
(167, 'American football', 'bóng đá mỹ', 9),
(168, 'Mountaineering', 'leo núi', 9),
(169, 'Volleyball', 'bóng chuyền', 9),
(170, 'Weightlifting', 'cử tạ', 9),
(171, 'Badminton racquet', 'vợt cầu lông', 9),
(172, 'Boxing glove', 'găng tay đấm bốc', 9),
(173, 'Hockey stick', 'gậy chơi khúc côn cầu', 9),
(174, 'Running shoes', 'giày chạy', 9),
(175, 'Baseball bat', 'gậy cbóng chày', 9),
(176, 'Rugby ball', 'quả bóng bầu dục', 9),
(177, 'Golf club', 'gậy đánh gôn', 9),
(178, 'Pool cue', 'gậy chơi bida', 9),
(179, 'Ice skates', 'giày trượt băng', 9),
(180, 'Tennis racquet', 'vợt tennis', 9),
(181, 'Face', 'khuôn mặt', 10),
(182, 'Mouth', 'miệng', 10),
(183, 'Chin', 'cằm', 10),
(184, 'Neck', 'cổ', 10),
(185, 'Shoulder', 'vai', 10),
(186, 'Arm', 'cánh tay', 10),
(187, 'Upper arm', 'cánh tay phía trên', 10),
(188, 'Elbow', 'khủy tay', 10),
(189, 'Forearm', 'cẳng tay', 10),
(190, 'Armpit', 'nách', 10),
(191, 'Back', 'lưng', 10),
(192, 'Chest', 'ngực', 10),
(193, 'Waist', 'thắt lưng, eo', 10),
(194, 'Abdomen', 'bụng', 10),
(195, 'Buttocks', 'mông', 10),
(196, 'Hip', 'hông', 10),
(197, 'Leg', 'phần chân', 10),
(198, 'Thigh', 'bắp đùi', 10),
(199, 'Knee', 'đầu gối', 10),
(200, 'Calf', 'bắp chân', 10),
(201, 'Noodles', 'Bún, phở', 11),
(202, 'Dumplings', 'Bánh bao, há cảo', 11),
(203, 'Sticky rice', 'Xôi', 11),
(204, 'Spaghetti', 'Mý ý', 11),
(205, 'Chicken drumstick', 'Đùi gà', 11),
(206, 'Spare ribs', 'Sườn non', 11),
(207, 'Beefsteak', 'Bít tết thịt bò', 11),
(208, 'Mixed grill', 'Món nướng thập cẩm', 11),
(209, 'Brownies', 'Bánh sô cô la', 11),
(210, 'Yogurt', 'sữa chua', 11),
(211, 'Cheesecake', 'bánh phô mai', 11),
(212, 'Coconut jelly', 'thạch dừa', 11),
(213, 'Doughnut', 'bánh rán', 11),
(214, 'Sorbet', 'kem trái cây', 11),
(215, 'Cookie', 'Bánh quy', 11),
(216, 'Ice cream', 'kem', 11),
(217, 'Hamburger', 'Bánh ham bơ gơ', 11),
(218, 'Chicken nugget', 'Gà không xương', 11),
(219, 'Onion ring', 'Hành tây chiên', 11),
(220, 'French fries', 'Khoai tây chiên', 11),
(221, 'Toast', 'Bánh mì nướng', 11),
(222, 'Sandwich', 'Bánh mì kẹp', 11),
(223, 'Beef soup', 'Súp bò', 11),
(224, 'Crab soup', 'Súp cua', 11),
(225, 'Salad', 'Rau trộn', 11),
(226, 'Baguette', 'Bánh mì Pháp', 11),
(227, 'Cheese biscuits', 'Bánh quy phô mai', 11),
(228, 'Rice', 'cơm', 11),
(229, 'Fried rice', 'Cơm rang', 11),
(230, 'Congee', 'Cháo', 11),
(231, 'Hotpot', 'Lẩu', 11),
(232, 'Ham', 'Giăm bông', 11),
(233, 'Fox', 'Con cáo', 13),
(234, 'Lion', 'Con sư tử', 13),
(235, 'Bear', 'Con gấu', 13),
(236, 'Elephant', 'Con voi', 13),
(237, 'Squirel', 'Con sóc', 13),
(238, 'Porcupine', 'Con nhím', 13),
(239, 'Hippopotamus', 'Con hà mã', 13),
(240, 'Raccoon', 'Con gấu mèo', 13),
(241, 'Giraffe', 'Con hươu cao cổ', 13),
(242, 'Rhinoceros', 'Con tê giác', 13),
(243, 'Jaguar', ' Con báo đốm', 13),
(244, 'Chimpanzee', 'Con hắc tinh tinh', 13),
(245, 'Donkey', 'Con lừa', 13),
(246, 'Zebra', 'Con ngựa vằng', 13),
(247, 'Panda', 'Con gấu trúc', 13),
(248, 'Radio', 'cái đài', 12),
(249, 'Record', 'đĩa hát', 12),
(250, 'Remote control', 'điều khiển từ xa', 12),
(251, 'Stereo', 'âm thanh nổi', 12),
(252, 'Speaker', 'loa', 12),
(253, 'Tripod', 'giá ba chân', 12),
(254, 'Turntable', 'máy quay đĩa hát', 12),
(255, 'TV', 'ti vi', 12),
(256, 'Antenna', 'ăng ten', 12),
(257, 'VCR', 'đầy máy video', 12),
(258, 'Video tape', 'cuộn băng hình', 12),
(259, 'wire', 'dây điện', 12),
(260, 'Zoom lens', 'ống kính thu phóng', 12),
(261, 'Audiotape', 'cuộn băng ', 12),
(262, 'Battery', 'pin', 12),
(263, 'Camera', 'máy ảnh', 12),
(264, 'Flask', 'đèn nháy', 12),
(265, 'CD player', 'đầu đĩa', 12),
(266, 'Horse racing', 'đua ngựa', 14),
(267, 'American football', 'bóng đá mỹ', 14),
(268, 'Mountaineering', 'leo núi', 14),
(269, 'Volleyball', 'bóng chuyền', 14),
(270, 'Weightlifting', 'cử tạ', 14),
(271, 'Badminton racquet', 'vợt cầu lông', 14),
(272, 'Boxing glove', 'găng tay đấm bốc', 14),
(273, 'Hockey stick', 'gậy chơi khúc côn cầu', 14),
(274, 'Running shoes', 'giày chạy', 14),
(275, 'Baseball bat', 'gậy cbóng chày', 14),
(276, 'Rugby ball', 'quả bóng bầu dục', 14),
(277, 'Golf club', 'gậy đánh gôn', 14),
(278, 'Pool cue', 'gậy chơi bida', 14),
(279, 'Ice skates', 'giày trượt băng', 14),
(280, 'Tennis racquet', 'vợt tennis', 14),
(281, 'Face', 'khuôn mặt', 15),
(282, 'Mouth', 'miệng', 15),
(283, 'Chin', 'cằm', 15),
(284, 'Neck', 'cổ', 15),
(285, 'Shoulder', 'vai', 15),
(286, 'Arm', 'cánh tay', 15),
(287, 'Upper arm', 'cánh tay phía trên', 15),
(288, 'Elbow', 'khủy tay', 15),
(289, 'Forearm', 'cẳng tay', 15),
(290, 'Armpit', 'nách', 15),
(291, 'Back', 'lưng', 15),
(292, 'Chest', 'ngực', 15),
(293, 'Waist', 'thắt lưng, eo', 15),
(294, 'Abdomen', 'bụng', 15),
(295, 'Buttocks', 'mông', 15),
(296, 'Hip', 'hông', 15),
(297, 'Leg', 'phần chân', 15),
(298, 'Thigh', 'bắp đùi', 15),
(299, 'Knee', 'đầu gối', 15),
(300, 'Calf', 'bắp chân', 15),
(301, 'Noodles', 'Bún, phở', 16),
(302, 'Dumplings', 'Bánh bao, há cảo', 16),
(303, 'Sticky rice', 'Xôi', 16),
(304, 'Spaghetti', 'Mý ý', 16),
(305, 'Chicken drumstick', 'Đùi gà', 16),
(306, 'Spare ribs', 'Sườn non', 16),
(307, 'Beefsteak', 'Bít tết thịt bò', 16),
(308, 'Mixed grill', 'Món nướng thập cẩm', 16),
(309, 'Brownies', 'Bánh sô cô la', 16),
(310, 'Yogurt', 'sữa chua', 16),
(311, 'Cheesecake', 'bánh phô mai', 16),
(312, 'Coconut jelly', 'thạch dừa', 16),
(313, 'Doughnut', 'bánh rán', 16),
(314, 'Sorbet', 'kem trái cây', 16),
(315, 'Cookie', 'Bánh quy', 16),
(316, 'Ice cream', 'kem', 16),
(317, 'Hamburger', 'Bánh ham bơ gơ', 16),
(318, 'Chicken nugget', 'Gà không xương', 16),
(319, 'Onion ring', 'Hành tây chiên', 16),
(320, 'Remote control', 'điều khiển từ xa', 17),
(321, 'Stereo', 'âm thanh nổi', 17),
(322, 'Speaker', 'loa', 17),
(323, 'Tripod', 'giá ba chân', 17),
(324, 'Turntable', 'máy quay đĩa hát', 17),
(325, 'TV', 'ti vi', 17),
(326, 'Antenna', 'ăng ten', 17),
(327, 'VCR', 'đầy máy video', 17),
(328, 'Video tape', 'cuộn băng hình', 17),
(329, 'wire', 'dây điện', 17),
(330, 'Zoom lens', 'ống kính thu phóng', 17),
(331, 'Audiotape', 'cuộn băng ', 17),
(332, 'Battery', 'pin', 17),
(333, 'Bear', 'Con gấu', 18),
(334, 'Elephant', 'Con voi', 18),
(335, 'Squirel', 'Con sóc', 18),
(336, 'Porcupine', 'Con nhím', 18),
(337, 'Hippopotamus', 'Con hà mã', 18),
(338, 'Raccoon', 'Con gấu mèo', 18),
(339, 'Giraffe', 'Con hươu cao cổ', 18),
(340, 'Rhinoceros', 'Con tê giác', 18),
(341, 'Jaguar', ' Con báo đốm', 18),
(342, 'Chimpanzee', 'Con hắc tinh tinh', 18),
(343, 'Donkey', 'Con lừa', 18),
(344, 'Mountaineering', 'leo núi', 19),
(345, 'Volleyball', 'bóng chuyền', 19),
(346, 'Weightlifting', 'cử tạ', 19),
(347, 'Badminton racquet', 'vợt cầu lông', 19),
(348, 'Boxing glove', 'găng tay đấm bốc', 19),
(349, 'Hockey stick', 'gậy chơi khúc côn cầu', 19),
(350, 'Running shoes', 'giày chạy', 19),
(351, 'Baseball bat', 'gậy cbóng chày', 19),
(352, 'Rugby ball', 'quả bóng bầu dục', 19),
(353, 'Golf club', 'gậy đánh gôn', 19),
(354, 'Pool cue', 'gậy chơi bida', 19),
(355, 'Ice skates', 'giày trượt băng', 19),
(356, 'Tennis racquet', 'vợt tennis', 19),
(357, 'Wine', 'Rượu vang', 20),
(358, 'Champagne', 'sâm panh', 20),
(359, 'Beer', 'bia', 20),
(360, 'Ale', 'bia tươi', 20),
(361, 'Lager', 'bia vàng', 20),
(362, 'Vodka', 'rượu vodka', 20),
(363, 'Coffee', 'cà phê', 20),
(364, 'Black coffee', 'cà phê đen', 20),
(365, 'White coffe', 'cà phê trắng', 20),
(366, 'Filter Coffee', 'cà phê nguyên chất', 20),
(367, 'Egg coffee', 'cà phê trứng', 20),
(368, 'Milk tea', 'trà sữa', 20),
(369, 'Green tea', 'trà xanh', 20),
(370, 'Tea', 'trà', 20),
(371, 'Water', 'nước', 20),
(372, 'Mineral water', 'nước khoáng', 20),
(373, 'Still water', 'nước không ga', 20),
(374, 'Lemonade', 'nước chanh', 20),
(375, 'Cola', 'coca cola', 20),
(376, 'Squash', 'nước ép', 20),
(377, 'Wine', 'Rượu vang', 21),
(378, 'Champagne', 'sâm panh', 21),
(379, 'Beer', 'bia', 21),
(380, 'Ale', 'bia tươi', 21),
(381, 'Lager', 'bia vàng', 21),
(382, 'Vodka', 'rượu vodka', 21),
(383, 'Coffee', 'cà phê', 21),
(384, 'Black coffee', 'cà phê đen', 21),
(385, 'White coffe', 'cà phê trắng', 21),
(386, 'Filter Coffee', 'cà phê nguyên chất', 21),
(387, 'Egg coffee', 'cà phê trứng', 21),
(388, 'Milk tea', 'trà sữa', 21),
(389, 'Green tea', 'trà xanh', 21),
(390, 'Tea', 'trà', 21),
(391, 'Water', 'nước', 21),
(392, 'Mineral water', 'nước khoáng', 21),
(393, 'Still water', 'nước không ga', 21),
(394, 'Lemonade', 'nước chanh', 21),
(395, 'Cola', 'coca cola', 21),
(396, 'Squash', 'nước ép', 21);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vocabularies`
--
ALTER TABLE `vocabularies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title_id` (`title_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vocabularies`
--
ALTER TABLE `vocabularies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=397;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `chat_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `topic`
--
ALTER TABLE `topic`
  ADD CONSTRAINT `topic_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `vocabularies`
--
ALTER TABLE `vocabularies`
  ADD CONSTRAINT `vocabularies_ibfk_1` FOREIGN KEY (`title_id`) REFERENCES `topic` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
