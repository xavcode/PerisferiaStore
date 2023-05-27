const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Review', {
    coment: {
        type: DataTypes.STRING
    }
})
}
        