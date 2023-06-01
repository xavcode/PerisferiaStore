import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'



const ReviewsStoreList = () => {

  const [listReviews, setListReviews] = useState([])



  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios.get(`http://localhost:3001/reviews/`)
      setListReviews(res.data)
    }
    fetchReviews()
  }, [])


  return (
    <div className="w-full mx-auto my-4 p-4 bg-white shadow-md rounded text-black">
      <h2 className="text-2xl font-bold mb-2">Comentarios</h2>
      {listReviews.length === 0 ? (
        <p>No hay comentarios disponibles.</p>
      ) : (
        <ul className="space-y-4">
          {listReviews.map((comment) => (
            <li key={comment.id} className="bg-gray-100 p-4 rounded shadow-md">
              <div className="text-gray-800 textarea mb-2 bg-white ">
                <p className='mx-16'>
                  {comment.comment}
                </p>
                <div className='flex'>
                  <span > <img className='h-12 rounded-full' src={comment.image} alt={comment.userId} /></span>
                  <span className='uppercase font-bold flex items-center mx-3'>{comment.userId}</span>
                  <span className='uppercase font-bold flex items-center mx-3'>{comment.createdAt.split('T')[0]}</span>
                </div>
                <div className="text-gray-500 text-sm flex items-center">
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ReviewsStoreList