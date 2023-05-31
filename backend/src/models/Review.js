const { INTEGER } = require('sequelize');
const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
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
        rating: {
            type: DataTypes.INTEGER   
        },
        image: {
            type: DataTypes.STRING,
        }

    },
    {
      timestamps: true
  }
  )
}