import React from 'react'
import CardBottom from "../../components/CardBottom/CardBottom";
import { AiFillCustomerService } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai"; //AiOutlineDollar
import { AiFillLock } from "react-icons/ai"; //AiOutlineUnlock
import { AiFillStar } from "react-icons/ai"; //AiOutlineStar
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const CardsBottom = () => {
  return (
    <div className="flex justify-center w-auto gap-12 mt-16">
      <CardBottom
        icon={<AiFillStar />}
        text="Encuentra productos perfectos para ti."
      />
      <CardBottom
        icon={<AiFillCustomerService />}
        text="Transforma tus deseos en realidad."
      />
      <CardBottom
        icon={<AiFillDollarCircle />}
        text="Descuentos exclusivos hasta del 50%."
      />
      <CardBottom
        icon={<AiOutlineFundProjectionScreen />}
        text="Todo lo que buscas en un solo sitio."
      />
      <CardBottom
        icon={<AiFillLock />}
        text="Tu compra segura."
      />
    </div>
  );
};

export default CardsBottom;
