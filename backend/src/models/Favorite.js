const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Favorite', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Otros campos específicos de los favoritos, si los tienes
  }, {
    timestamps: false
  });
};
