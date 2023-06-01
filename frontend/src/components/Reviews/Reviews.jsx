import React from 'react'
import { FaStar } from 'react-icons/fa';
import avatar from '../../assets/images/profile-default-image.png'
import { useState, useEffect } from "react";

import axios from 'axios'

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/store/${id}`);
      setReviews(response.data.Reviews);
    };
    fetchData();

  }, [])
  
  return (
    <div className="min-w-[650px] my-4">
      <h2 className="text-2xl font-bold mb-2 text-center">Reseñas de Clientes</h2>
      {reviews.length < 1 ? (
        <p>No hay reseñas disponibles.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded shadow-md">
              <div className="text-gray-800 textarea mb-2 bg-white">
                <p className='mx-16'>
                  {review.comment}
                </p>
                <div className='flex'>
                  <span>
                    <img
                      className='h-12 rounded-full'
                      src={review.image ? review.image : avatar}
                      alt={review.userId}
                    />
                  </span>
                  <span className='uppercase font-bold flex items-center mx-3'>
                    {review.userId}
                  </span>
                  <span className='uppercase font-bold flex items-center mx-3'>
                    {review.createdAt
                      ? review.createdAt.split('T')[0]
                      : '123123'}
                  </span>
                </div>
                <div className="text-gray-500 text-sm flex items-center"></div>
                {review.rating && (
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(review.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}
export default Reviews