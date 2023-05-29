import React from 'react'
import { FaStar } from 'react-icons/fa';
import avatar from '../../assets/images/profile-default-image.png'

const reviews = [
  {
    author: 'Cliente 1',
    date: '2023-05-20',
    comment: '¡Excelente producto! Muy satisfecho con mi compra.',
    rating: 5,
  },
  {
    author: 'Cliente 2',
    date: '2023-05-18',
    comment: 'Buena calidad, lo recomiendo.',
    rating: 4,
  },
  {
    author: 'Cliente 3',
    date: '2023-05-16',
    comment: 'El producto llegó en mal estado. No estoy satisfecho.',
    rating: 2,
  },
  {
    author: 'Cliente 4',
    date: '2023-05-14',
    comment: 'El servicio al cliente fue muy bueno, pero el producto no cumplió mis expectativas.',
    rating: 3,
  },
  {
    author: 'Cliente 5',
    date: '2023-05-12',
    comment: 'Increíble calidad. Superó mis expectativas.',
    rating: 5,
  },
  {
    author: 'Cliente 6',
    date: '2023-05-10',
    comment: 'No recomiendo este producto. Mala calidad.',
    rating: 1,
  },
  {
    author: 'Cliente 7',
    date: '2023-05-08',
    comment: '¡Me encantó! Lo compraría nuevamente sin dudarlo.',
    rating: 5,
  },
  {
    author: 'Cliente 8',
    date: '2023-05-06',
    comment: 'El envío fue rápido y el producto está en perfectas condiciones.',
    rating: 4,
  },
  {
    author: 'Cliente 9',
    date: '2023-05-04',
    comment: 'No es lo que esperaba. No lo recomendaría.',
    rating: 2,
  },
  {
    author: 'Cliente 10',
    date: '2023-05-02',
    comment: 'Excelente relación calidad-precio. Muy satisfecho.',
    rating: 5,
  },
  {
    author: 'Cliente 11',
    date: '2023-04-30',
    comment: 'No cumple con lo prometido. Decepcionado con la compra.',
    rating: 2,
  },
  {
    author: 'Cliente 12',
    date: '2023-04-28',
    comment: 'Buen producto, aunque un poco caro.',
    rating: 4,
  },
  {
    author: 'Cliente 13',
    date: '2023-04-26',
    comment: '¡Una gran adquisición! Muy contento con el producto.',
    rating: 5,
  },
  {
    author: 'Cliente 14',
    date: '2023-04-24',
    comment: 'No vale la pena. No lo recomendaría.',
    rating: 1,
  },
  {
    author: 'Cliente 15',
    date: '2023-04-22',
    comment: 'Muy buen servicio al cliente. Atentos y amables.',
    rating: 4,
  },
];


const Reviews = () => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">Reseñas de Clientes</h2>
      {reviews.length === 0 ? (
        <p>No hay reseñas disponibles.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">

              <img
                src={avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full"
              />

              <div className="flex items-center space-x-2 mb-2 bg-white text-black">
                <strong className="text-lg">{review.author}</strong>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <div className="flex items-center space-x-1">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews