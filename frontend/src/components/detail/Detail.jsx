import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../Card/Card';

const Detail = (prop) => {
    
    const [stateDetail, setStateDetail] = useState([]);
    const { id } = useParams();


    useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setStateDetail([response.data]);
    }
    fetchData()
    }, []);
    console.log(stateDetail)

  return (
    <div>
           <div className='grid mx-8 mt-44 md:mt-24 grid-cols-1  sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4'>
      {stateDetail.map(product => (
        <Card
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
    </div>
  )
}

export default Detail
