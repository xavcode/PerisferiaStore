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
    <div className="min-w-[650px] my-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Reseñas de Clientes</h2>
      {reviews<1 ?  <p>No hay reseñas disponibles.</p>
       : (
        <ul className="space-y-4">
          {reviews?.map((review, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">
              <img
                src={avatar}
                alt={review.userId}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex items-center space-x-2 mb-2 bg-white text-black ">
                <strong className="text-lg">{review.userId}</strong>
              </div>
              <p className="text-gray-600 mb-2 text-start">{review.comment}</p>
              {review.rating && (
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Reviews