const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Ad = sequelize.define('Ad', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactPerson: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true 
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[+]*[0-9]{7,15}$/ 
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: [['KZT', 'USD', 'EUR']]
    }
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'ads',
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: false
});


const syncModel = async () => {
  try {
    await Ad.sync({ alter: true }); 
    console.log('Таблица объявлений успешно создана');
  } catch (err) {
    console.error('Ошибка при создании таблицы объявлений:', err);
  }
};


module.exports = { Ad, syncModel };
