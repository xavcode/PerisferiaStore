import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

const ReviewForm = ({ id }) => {
  const { user, isAuthenticated } = useAuth0();
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      if (isAuthenticated && user && user.email) {
        try {
          const response = await axios.get(
            `https://perisferiastore-production.up.railway.app/admin/user/${user.email}`
          );
          setUserId(response.data.id);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
        }
      }
    };

    if (isAuthenticated && user && user.email) {
      fetchId();
    }
  }, [isAuthenticated, user]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'info',
        title: 'Iniciar sesión',
        text: 'Inicia sesión para agregar una reseña 😉',
      });
    } else {
      const date = new Date();
      const formattedDate = date.toISOString().split('T')[0];
      const sendReview = {
        userId: userId,
        comment: comment,
        rating: rating,
      };
      try {
        await axios.post(`https://perisferiastore-production.up.railway.app/product/${id}`, sendReview);
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Tu reseña ha sido enviada correctamente.',
        }).then(() => {
          window.location.reload();
        });
      } catch (error) {
        console.error('Error al enviar la reseña:', error);
      }
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container text-black bg-white rounded-lg p-3 mt-4" style={{ backgroundColor: "#F9F8F1" }}>
      <h2 className="text-2xl font-bold text-center">Deja tu reseña</h2>
      <label htmlFor="user">Usuario: </label>
      <span id="user">{user && `${user.name ? user.name : user.title}`}</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Puntuación:</label>
          <select
            className="text-black bg-white select ml-2"
            style={{ backgroundColor: "#F9F8F1" }}
            id="rating"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>
        <div className="flex flex-col">
          <textarea
            className="textarea text-black bg-white mt-2"
            style={{ backgroundColor: "#F9F8F1" }}
            id="comment"
            value={comment}
            required={true}
            onChange={handleCommentChange}
            rows="2"
            cols="50"
            placeholder="Deja tu comentario"
          />
        </div>
        <div className="w-full flex justify-end pr-4">
          <button
            className="btn text-white bg-blue-700 mt-2  w-20"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;