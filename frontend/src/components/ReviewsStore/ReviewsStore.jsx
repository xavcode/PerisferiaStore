import React, { useState, useEffect } from 'react';
import ReviewsStoreList from '../ReviewsStoreList/ReviewsStoreList';
import Swal from 'sweetalert2';
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';

const reviewsStore = () => {
  const { user } = useAuth0()
  const [userId, setUserId] = useState('')
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      if (user && user.email) {
        try {
          const response = await axios.get(`http://localhost:3001/admin/user/${user.email}`);
          setUserId(response.data.id)
        } catch (error) {
          console.error('Error al obtener el usuario:', error);
        }
      }
    };

    if (user && user.email) {
      fetchId();
    }
  }, [user]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        title: 'Inicia sesión',
        text: 'Inicia sesión para agregar una reseña 😉',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
    }
    const sendReview = {
      userId: userId,
      comment: comment,
    };

    try {
      await axios.post(`http://localhost:3001/store/${userId}`, sendReview);
      Swal.fire({
        title: 'Gracias!',
        text: 'Se ha registrado tu comentario',
        icon: 'info',
        confirmButtonText: 'Ok',
      });
      setComment('')

    } catch (error) {
      console.error('Error al enviar la reseña:', error);
    }

    setComment('');
  };

  return (
    <div className=' mt-10 flex flex-col w-full container text-black'>
      <div className='flex flex-col w-full container'>
        <div className="w-full mx-auto text-center my-4 p-4 bg-white shadow-md text-black container rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Deja tu comentario</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full textarea rounded border bg-white text-black border-gray-300 focus:outline-none focus:border-indigo-500"
              rows="2"
              placeholder="Escribe tu comentario..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded bg-blue-900 hover:bg-blue-600"
            >
              Enviar comentario
            </button>
          </form>
        </div>

        <ReviewsStoreList />
      </div>
    </div>
  );
};
export default reviewsStore;