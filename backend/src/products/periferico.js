const { Product } = require("../models/Product");

const products = [
    {
      name: 'earbuds blancos con celeste ',
      price: 15.000,
      img: "https://ibb.co/tQFH0PH",
      status: 'available',
      description: 'Descripción del producto 1',
      rating: 4,
      category: 'Earbuds',
      brand: 'Marca 1'
    },
    {
      name: 'earbuds superman',
      price: 25.000,
      img: 'https://ibb.co/fpchtyR',
      status: 'available',
      description: 'Descripción del producto 2',
      rating: 5,
      category: 'Earbuds',
      brand: 'Marca 2'
    },
    {
      name: 'earbuds negro y rojo',
      price: 15.000,
      img: "https://ibb.co/PC3QS67",
      status: 'available',
      description: 'Descripción del producto 2',
      rating: 5,
      category: 'Earbuds',
      brand: 'Marca 2'
    },
    {
      name: 'earbuds negro y amarillo',
      price: 15.000,
      img: "https://ibb.co/fvgBC79",
      status: 'available',
      description: 'Descripción del producto 2',
      rating: 5,
      category: 'Earbuds',
      brand: 'Marca 2'
    },
    {
        name: 'earbuds blanco y rosado',
        price: 15.000,
        img: "https://ibb.co/58VPcx3",
        status: 'available',
        description: 'Descripción del producto 2',
        rating: 5,
        category: 'Earbuds',
        brand: 'Marca 2'
    }
  ];
  
  const seedProducts = async () => {
    await Product.sync({ alter: true }); // Esto creará la tabla en la base de datos si no existe y eliminará todos los datos existentes
    await Promise.all(products.map(product => Product.create(product)));
    console.log('Productos creados con éxito');
  };
  
seedProducts();
  

