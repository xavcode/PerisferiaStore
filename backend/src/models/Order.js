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
            validate: {
                isInt: {
                args: [0, Infinity],
                msg: "La cantidad debe ser positiva",
                },
            },
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isInt: {
                args: [0, Infinity],
                msg: "El precio total debe ser positivo",
                },
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                msg: "Se requiere un nombre",
                },
            },
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                msg: "No puede estar vacío.",
                },
            },
        },
    },
    {
        timestamps: false
    })
}