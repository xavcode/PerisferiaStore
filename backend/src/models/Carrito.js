const { DataTypes } = require('sequelize');




module.exports = (sequelize) => {
  sequelize.define('Carrito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
       totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    },
    {
        timestamps: false
    })
  }
