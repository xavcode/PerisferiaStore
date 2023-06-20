import React, { useState, useEffect } from "react";
import ReviewsStoreList from "../ReviewsStoreList/ReviewsStoreList";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";

const ReviewsStore = () => {
  const { user } = useAuth0();
  const [userId, setUserId] = useState("");
  const [comment, setComment] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchId = async () => {
      if (user && user.email) {
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

    if (user && user.email) {
      fetchId();
    }
  }, [user]);

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        title: "Inicia sesión",
        text: "Inicia sesión para agregar una reseña 😉",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return; // Detener la ejecución de la función si el usuario no ha iniciado sesión
    }

    const sendReview = {
      userId: userId,
      comment: comment,
    };

    try {
      await axios.post(
        `https://perisferiastore-production.up.railway.app/store/${userId}`,
        sendReview
      );
      Swal.fire({
        title: "Gracias!",
        text: "Se ha registrado tu comentario",
        icon: "info",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          setComment("");
          location.reload(); // Recargar la página después de confirmar el alert
        }
      });
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
    }
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsInputClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!user) {
    return null; // No mostrar el componente si el usuario no ha iniciado sesión
  }

  return (
    <div
      className="mt-10 flex flex-col items-center bg-gray-900"
      style={{ backgroundColor: "#161F2D" }}
    >
      <div
        className={`w-full mx-auto text-center my-4 p-4 bg-gray-800 shadow-xl text-white rounded-xl transform ${
          isInputClicked ? "scale-105" : ""
        } transition-transform duration-300`}
        style={{ backgroundColor: "#161F2D" }}
      >
        <h2 className="text-3xl font-bold mb-4">Deja tu comentario</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <textarea
            className="w-full textarea rounded border bg-gray-900 text-white border-gray-300 focus:outline-none focus:border-indigo-500 mb-4 p-2"
            style={{ backgroundColor: "#161F2D" }}
            rows="4"
            placeholder="Escribe tu comentario..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onClick={handleInputClick}
            required
            ref={inputRef}
          ></textarea>
          <button
            type="submit"
            className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded transform transition-all duration-300 hover:scale-105"
          >
            Enviar comentario
          </button>
        </form>
      </div>

      <ReviewsStoreList />
    </div>
  );
};

export default ReviewsStore;
