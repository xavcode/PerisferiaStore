import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'
// import { useAuth0 } from '@auth0/auth0-react';

const ReviewsStoreList = () => {
  const [listReviews, setListReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(3);
  // const { user } = useAuth0();
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios.get(`https://perisferiastore-production.up.railway.app/reviews/`);
      setListReviews(res.data);
    };
    fetchReviews();
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = listReviews.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(listReviews.length / commentsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleVote = (commentId, voteType) => {
    // Actualiza los votos del comentario
    setVotes((prevVotes) => ({
      ...prevVotes,
      [commentId]: voteType,
    }));
  
    // Realiza una llamada a la API para guardar el voto en el backend si es necesario
    // Puedes usar axios u otra biblioteca de tu elección para realizar la llamada HTTP
  };
  

  return (
    <div className="w-full mx-auto my-4 p-4 bg-gray-800 shadow-md rounded text-white" 
    style={{ backgroundColor: "#161F2D" }}>
      <h2 className="text-3xl font-bold mb-4 text-center">Comentarios</h2>
      {listReviews.length === 0 ? (
        <p className="text-gray-400 text-center">No hay comentarios disponibles.</p>
      ) : (
        <>
          <ul className="space-y-4"
                style={{ backgroundColor: "#161F2D" }}
                >
            {currentComments.map((comment) => (
              <li key={comment.id} className="bg-gray-800 p-4 rounded shadow-md"
                >
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={comment.image} alt={comment.userId} />
                  </div>
                  <div>
                    <span className="uppercase font-bold mr-4">{comment.userId}</span>
                    <p className="text-gray-200 text-lg mb-2">{comment.comment}</p>
                    <div className="flex items-center">
                      <span className="text-gray-400">{comment.createdAt.split('T')[0]}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`mx-1 px-3 py-1 rounded-full focus:outline-none ${
                  number === currentPage ? 'bg-amber-600 text-white' : 'bg-gray-300 text-gray-700'
                } hover:bg-amber-600 hover:text-white transition duration-300 ease-in-out`}
              >
                {number}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewsStoreList;



{/* <button
className="text-sm text-red-500 hover:text-red-700 transition-colors duration-300"
  onClick={() => handleDelete(comment.id)}
  >
  Eliminar
</button> */}

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`https://perisferiastore-production.up.railway.app/reviews/${id}`);
  //     setListReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  //   } catch (error) {
  //     console.error('Error al eliminar el comentario:', error);
  //   }
  // };