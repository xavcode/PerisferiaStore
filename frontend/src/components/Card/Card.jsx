import React from 'react'

const Card = (props) => {
  return (
    <div className='grid min-w-[300px]'>
      <div className="flex flex-col rounded-lg bg-white justify-between pt-8 align-center">
        <div className='flex justify-center align-center'>
          <img className=" flex h-[220px] w-[200px] align-center justify-center" src={props.image} alt={props.title} />
        </div>
        <div className="px-5 pb-5">
          <div href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">{props.title}</h5>
          </div>
          <div className="grid justify-center">
            <span className="text-center font-bold text-red-600">Rating: {props.rating.rate}</span>
            <span className="text-2xl text-center font-bold text-gray-900 ">{`${props.price}$ `}</span>
            <div className="text-white bg-buttons hover:bg-b_hover font-medium rounded-lg text-sm px-5 py-2 text-center "> Agregar al carrito</div>
          </div>
        </div>
      </div>
    </div>
  )
}
// test
export default Card