import React from 'react'

const CardBottom = (props) => {
  return (

    <div className=''>
      <div className="flex flex-col items-center  gap-4 w-36 h-40 p-1  pt-4 rounded-lg shadow-lg  text-center transition duration-300 ease-in-out hover:shadow-2xl bg-gray-400 hover:shadow-primary hover:scale-110 ">
        <div className="text-5xl text-gray-800" alt="icon">
        {props.icon}
        </div>
        <div className="text-sm font-semibold text-gray-800">
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default CardBottom