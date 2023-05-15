import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';

const Detail = () => {

  const [product, setProduct] = useState({});
  const { id } = useParams();

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      setProduct(response.data);
    }
    fetchData()
  }, []);



  return (
    <div className='flex mt-[200px] justify-center items-center'>
      <div className="flex flex-col rounded-lg bg-white pt-4 p-5">
      <Link to="/store" className="text-gray-500 hover:text-gray-900 mb-2">
        <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg></Link>

        {/* image side */}
        <div className='flex px-2'>
          <div className='flex flex-col items-start'>
            <Link className='flex flex-col justify-center items-center' to={`/store/${product.id}`}>
              <img className=" max-h-[350px] max-w-[250px] min-h-[200px] min-w-[200px] align-center justify-center my-2" src={product.image} alt={product.title} />
              <h5 className="max-w-[200px] text-xl font-semibold tracking-tight text-gray-900 text-center mb-2">{product.title}</h5>
            </Link>
            <div className="flex items-center">
              <span className="text-center text-xl font-bold text-red-600 mr-2">Rating: {product.rating}</span>
              <span className="text-2xl text-left font-bold text-gray-900 ml-4">Precio: {`${product.price}$ `}</span>
            </div>
          </div>
          {/* description side */}
          <div className='flex flex-col w-[200px] text-justify justify-between pb-1'>
            <p className='w-[200px] text-black mb-2'> Descripción: {`${product.description}`}</p>
            <p className='w-[200px] text-black'> Categoría: {`${product.category}`}</p>
            <p className='text-black  '> Colores:
              <select className='ml-4 bg-gray-200 hover:bg-transparent select-color' name="colorPicker" id="colorPicker">
                <option className='bg-gray-200 hover:bg-transparent' value="red">Rojo</option>
                <option className='bg-gray-200 hover:bg-transparent' value="yellow">Amarillo</option>
                <option className='bg-gray-200 hover:bg-transparent' value="blue">Azul</option>
              </select>
            </p>
            <p className='text-black '> Estado: {`${product.status}`}</p>
            <a href="#" className=" mt-3 text-white bg-buttons hover:bg-b_hover font-medium rounded-lg text-sm px-5 py-2 text-center "> Agregar al carrito</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
