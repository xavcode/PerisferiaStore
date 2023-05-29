const { DataTypes, UUIDV4 } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define("order", {
        id: {
            type: DataTypes.STRING,
            defaultValue: UUIDV4,
            type: DataTypes.STRING,
            defaultValue: UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true, 
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
    })
}