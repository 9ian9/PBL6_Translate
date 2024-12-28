const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/database_pbl6', {
    dialect: 'mysql',
    logging: console.log
});

sequelize.authenticate()
    .then(() => console.log('Database connected from topic...'))
    .catch(err => console.log('Error: ' + err));

const Topic = sequelize.define('Topic', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgTopic: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'topic', // Đảm bảo tên bảng là 'topic'
    timestamps: false
});

module.exports = Topic;