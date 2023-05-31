const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('StoreReview', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        userId: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING
        },
    },
    {
      timestamps: true
  })
}