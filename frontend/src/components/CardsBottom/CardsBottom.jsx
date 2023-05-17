import React from 'react'
import CardBottom from "../../components/CardBottom/CardBottom";
import { AiFillCustomerService } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai"; //AiOutlineDollar
import { AiFillLock } from "react-icons/ai"; //AiOutlineUnlock
import { AiFillStar } from "react-icons/ai"; //AiOutlineStar
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

<<<<<<< HEAD
// const CardsBottom = () => {
//   return (

//     <div className="flex justify-center w-auto gap-12 mt-16 ">
//       <CardBottom
//         icon={<AiFillStar />}
//         text={<p>Encuentra productos perfectos para ti.</p>}
//       />
//       <CardBottom
//         icon={<AiFillCustomerService />}
//         text={<p>Transforma tus deseos en realidad.</p>}
//       />
//       <CardBottom
//         icon={<AiFillDollarCircle />}
//         text={<p>Descuentos exclusivos hasta del 50%.</p>}
//       />
//       <CardBottom
//         icon={<AiOutlineFundProjectionScreen />}
//         text={<p>Todo lo que buscas en un solo sitio.</p>}
//       />
//       <CardBottom
//         icon={<AiFillLock />}
//         text={<p>Tu compra Segura.</p>}
//       />
//     </div>
//   )
// }

const CardsBottom = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 mt-16">
=======
const CardsBottom = () => {
  return (

    <div className="flex justify-center w-auto gap-12 mt-16 ">
>>>>>>> cfe8abba332e43cb38f203bb0190a59d96c37dbc
      <CardBottom
        icon={<AiFillStar />}
        text={<p>Encuentra productos perfectos para ti.</p>}
      />
      <CardBottom
        icon={<AiFillCustomerService />}
        text={<p>Transforma tus deseos en realidad.</p>}
      />
      <CardBottom
        icon={<AiFillDollarCircle />}
        text={<p>Descuentos exclusivos hasta del 50%.</p>}
      />
      <CardBottom
        icon={<AiOutlineFundProjectionScreen />}
        text={<p>Todo lo que buscas en un solo sitio.</p>}
      />
      <CardBottom
        icon={<AiFillLock />}
        text={<p>Tu compra Segura.</p>}
      />
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> cfe8abba332e43cb38f203bb0190a59d96c37dbc
}

export default CardsBottom