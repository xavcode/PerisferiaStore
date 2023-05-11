import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../Card/Card';

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    fetchData()
  }, []);
  return (
    <div className='grid mx-8 mt-44 md:mt-24 grid-cols-1  sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4'>
      {products.map(product => (
        <Card
          products ={products}
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
          rating={product.rating}
        />
      ))
      }
    </div>
  )
}
export default Cards
