import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className='grid min-w-[300px]'>

      <div className="flex flex-col rounded-lg bg-white pt-4 justify-between p-5">
        <div >
          <Link className='flex flex-col justify-center items-center' to={`/store/${props.id}`}>
            <img className=" max-h-[180px] max-w-[150px] align-center justify-center my-2" src={props.image} alt={props.title} />
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">{props.title}</h5>
          </Link>
        </div>
        <div className="grid justify-center">
          <span className="text-center font-bold text-red-600">Rating: {props.rating.rate}</span>
          <span className="text-2xl text-center font-bold text-gray-900 ">{`${props.price}$ `}</span>
          <a href="#" className="text-white bg-buttons hover:bg-b_hover font-medium rounded-lg text-sm px-5 py-2 text-center "> Agregar al carrito</a>
        </div>

      </div>
    </div>
  )
}
// test
export default Card