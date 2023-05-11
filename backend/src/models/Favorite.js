const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('favorite', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER
        },
        productId:{
            type: DataTypes.INTEGER
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        productDescription: {
            type: DataTypes.STRING
        }
    });
};