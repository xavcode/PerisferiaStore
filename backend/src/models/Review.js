const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      idReviews: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName:{
        type: DataTypes.STRING,
        allowNull:false
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [5, 1000] 
      }},

      productName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      rating: {
        type: DataTypes.REAL,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
      },
      status: {  
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
    },
    // {
    //   timestamps: false,
    // }
  );
};