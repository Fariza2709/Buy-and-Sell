const { Sequelize } = require('sequelize');
const UserModel = require('./User'); 
const AdModel = require('./Ad');
require('dotenv').config();


const sequelize = new Sequelize(
  process.env.DB_NAME,        
  process.env.DB_USER,        
  process.env.DB_PASSWORD,   
  {
    host: process.env.DB_HOST, 
    dialect: process.env.DB_DIALECT,
    logging: false 
  }
);


const User = UserModel(sequelize, Sequelize.DataTypes);
const Ad = AdModel(sequelize, Sequelize.DataTypes);


User.hasMany(Ad, { foreignKey: 'userId' });
Ad.belongsTo(User, { foreignKey: 'userId' });


const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Используйте { force: true } для сброса таблиц
    console.log('Модели синхронизированы с базой данных');
  } catch (err) {
    console.error('Ошибка синхронизации моделей:', err);
  }
};

module.exports = { sequelize, User, Ad, syncModels };
