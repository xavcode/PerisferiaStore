const {DataTypes, Sequelize} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define("order", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
    })
}