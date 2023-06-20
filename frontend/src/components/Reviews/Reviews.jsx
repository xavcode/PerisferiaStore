import React from 'react'
import { FaStar } from 'react-icons/fa';
import avatar from '../../assets/images/profile-default-image.png'
import { useState, useEffect } from "react";

import axios from 'axios'

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://perisferiastore-production.up.railway.app/store/${id}`);
      setReviews(response.data.Reviews);
    };
    fetchData();

  }, [])
  
  return (
    <div className="min-w-[650px] my-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">Reseñas de Clientes</h2>
      {reviews.length < 1 ? (
        <p className="text-gray-500 text-center">No hay reseñas disponibles.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4" style={{ backgroundColor: "#F9F8F1" }}>
              <div className="flex items-start space-x-4" 
              style={{ backgroundColor: "#F9F8F1" }}
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={review.image ? review.image : avatar}
                    alt={review.userId}
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-800">{review.userId}</span>
                    <span className="text-gray-500 text-sm">
                      {review.createdAt ? review.createdAt.split("T")[0] : "123123"}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-800">{review.comment}</p>
                  {review.rating && (
                    <div className="flex items-center mt-2">
                      {[...Array(review.rating)].map((_, index) => (
                        <svg
                          key={index}
                          className="h-4 w-4 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2.343l2.39 4.854 5.36.78-3.89 3.798.918 5.34L10 15.35l-4.88 2.764.918-5.34-3.89-3.798 5.36-.78L10 2.342z"
                          />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Reviews