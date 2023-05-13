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

  return (
    <div>
      <div className='flex h-screen justify-center items-center  '>
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
