const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/pbl6', {
    dialect: 'mysql',
    logging: console.log
});

sequelize.authenticate()
    .then(() => console.log('Database connected from topic...'))
    .catch(err => console.log('Error: ' + err));

const Topic = sequelize.define('Topic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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