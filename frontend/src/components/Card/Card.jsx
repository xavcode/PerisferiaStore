import React from 'react'

const Card = (props) => {
  return (
    <div className='grid '>
      <div className="flex flex-col rounded-lg bg-white justify-between pt-8 align-center max-w-[320px]">
        <a href="#" className='flex justify-center align-center'>
          <img className=" flex max-h-[180px] max-w-[150px] align-center justify-center" src={props.image} alt={props.title} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">{props.title}</h5>
          </a>
          <div className="grid justify-center">
            <span className="text-center font-bold text-red-600">Rating: {props.rating.rate}</span>
            <span className="text-2xl text-center font-bold text-gray-900 ">{`${props.price}$ `}</span>
            <a href="#" className="text-white bg-buttons hover:bg-b_hover font-medium rounded-lg text-sm px-5 py-2 text-center "> Agregar al carrito</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card