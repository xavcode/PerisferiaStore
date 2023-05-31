const { DataTypes } = require('sequelize');




module.exports = (sequelize) => {
<<<<<<< HEAD
  sequelize.define('Carrito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
       totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    },
    {
        timestamps: false
    })
  }
=======
  sequelize.define('Carrito')

}
>>>>>>> 0e4153b47c63b0e117523243ff55a1f9c3bb5895
