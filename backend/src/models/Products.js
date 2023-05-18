const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Products', {
        id: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('disponible', 'Sin stock'),
            defaultValue: 'disponible',
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // brand: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    }, {
        timestamps: false
    }
    )
}