import React, { useState } from 'react';


const comments = [
  {
    id: 1,
    author: 'Usuario1',
    comment: '¡Excelente experiencia de compra! Todo llegó en perfectas condiciones y en el tiempo estimado. Muy recomendado.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Usuario2',
    comment: 'Buen servicio al cliente. Me ayudaron con todas mis dudas y el proceso de compra fue sencillo.',
    rating: 4,
  },
  {
    id: 3,
    author: 'Usuario3',
    comment: 'Me gustó la variedad de productos disponibles. Encontré lo que necesitaba sin problemas.',
    rating: 4,
  },
  {
    id: 4,
    author: 'Usuario4',
    comment: 'Buena calidad de los productos. Estoy satisfecho con mi compra.',
    rating: 4,
  },
  {
    id: 5,
    author: 'Usuario5',
    comment: 'El envío fue rápido y todo llegó en buen estado. Volvería a comprar aquí.',
    rating: 5,
  },
  {
    id: 6,
    author: 'Usuario6',
    comment: 'Me pareció una experiencia de compra normal. No tuve ningún problema, pero tampoco destacó.',
    rating: 3,
  },
  {
    id: 7,
    author: 'Usuario7',
    comment: 'Buen servicio. Los precios son justos y la entrega fue puntual.',
    rating: 4,
  },
  {
    id: 8,
    author: 'Usuario8',
    comment: 'La navegación del sitio es fácil y la búsqueda de productos es rápida. Buena experiencia general.',
    rating: 4,
  },
  {
    id: 9,
    author: 'Usuario9',
    comment: 'El proceso de pago fue seguro y no tuve inconvenientes. Recomendaría este eCommerce.',
    rating: 4,
  },
  {
    id: 10,
    author: 'Usuario10',
    comment: 'Muy buen servicio al cliente. Resolvieron rápidamente un problema con mi pedido.',
    rating: 5,
  },
];

const reviewsStore = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comentario enviado:', comment);
    setComment('');
  };

  return (
    <div className='flex flex-col w-full container text-black'>
      <div className='flex flex-col w-full container'>
        <div className="w-full mx-auto text-center my-4 p-4 bg-white shadow-md text-black container rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Dejar un comentario</h2>
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
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              Enviar comentario
            </button>
          </form>
        </div>

        <div className="w-full mx-auto my-4 p-4 bg-white shadow-md rounded">
          <h2 className="text-2xl font-bold mb-2">Comentarios</h2>
          {comments.length === 0 ? (
            <p>No hay comentarios disponibles.</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="bg-gray-100 p-4 rounded shadow-md">
                  <p className="text-gray-800 mb-2">{comment.comment}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(comment.rating)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 16.878l4.203 2.324a1 1 0 0 0 1.43-1.054l-1.02-4.992 3.457-3.376a1 1 0 0 0-.566-1.705l-5.068-.737-2.26-4.59a1 1 0 0 0-1.798 0L7.495 7.072l-5.068.737a1 1 0 0 0-.567 1.705l3.457 3.376-1.02 4.992a1 1 0 0 0 1.43 1.054L10 16.878z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Por: {comment.author}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>

  );
};
export default reviewsStore;