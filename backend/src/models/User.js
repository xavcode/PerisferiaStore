const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,

    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      // allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
    }, 
    password: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_authenticated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    theme: {
      type: DataTypes.ENUM('claro', 'oscuro'),
      defaultValue: 'claro',
    },
  },
    {
      timestamps: false
    });
};