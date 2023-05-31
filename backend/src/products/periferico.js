const { Products } = require('../models/Product');


const products = [
    {
      title: 'earbuds blancos con celeste ',
      price: 15.000,
      img: "https://ibb.co/tQFH0PH",
      status: 'available',
      description: 'Descripción del producto 1',
      rating: 4,
      category: 'Earbuds',
      brand: 'Marca 1'
    },
    {
      title: 'earbuds superman',
      price: 25.000,
      img: 'https://ibb.co/fpchtyR',
      status: 'available',
      description: 'Descripción del producto 2',
      rating: 5,
      category: 'Earbuds',
      brand: 'Marca 2'
    },
    {
       title: 'earbuds negro y rojo',
       price: 15.000,
       img: "https://i.ibb.co/3hGzJCD/earbuds-prod-3.webp",
       status: 'available',
       description: 'Descripción del producto 2',
       rating: 5,
       category: 'Earbuds',
       brand: 'Marca 2'
    },
    {
       title: 'earbuds negro y amarillo',
       price: 15.000,
       img: "https://ibb.co/fvgBC79",
       status: 'available',
       description: 'Descripción del producto 2',
       rating: 5,
       category: 'Earbuds',
       brand: 'Marca 2'
    },
    {
        title: 'earbuds blanco y rosado',
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
    await Products.sync({ alter: true }); 
    console.log(products)
    await Promise.all(products.map(product => Products.create(product)));
    console.log('Productos creados con éxito');
  };
  
seedProducts();
  

