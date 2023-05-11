const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('cart', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    status: {
        type: DataTypes.ENUM('en proceso', 'pendiente', 'completado'),
        defaultValue: 'en proceso',
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    checkoutDate: {
        type: DataTypes.DATE,
    },
    });
};