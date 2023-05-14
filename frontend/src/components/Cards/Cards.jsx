import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../Card/Card';
import { Link } from "react-router-dom";
import './Cards.css'

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/store');
      setProducts(response.data);
    }
    fetchData()
  }, []);
  return (
    <div className='grid mx-8 mt-44 md:mt-24 grid-cols-1  sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4'>
      {products.map(product => (
        <Link key={product.id} className='flex' to={`/store/${product.id}`}>
        <Card
          products ={products}
          key={product.id}
          id={product.id}
          title={product.name}
          description={product.description}
          price={product.price}
          image={product.img}
          category={product.category}
          rating={product.rating}
        />
          </Link>
      ))
      }
    </div>
  )
}
export default Cards
