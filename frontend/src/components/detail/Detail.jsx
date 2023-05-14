import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = (prop) => {

  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      setProduct(response.data);
    }
    fetchData()
  }, []);
  console.log(product.category)

  return (
    <div className='flex mt-[200px] justify-center items-center'>
      <div className="flex flex-col rounded-lg bg-white pt-4 p-5">

        {/* image side */}
        <div className='flex px-2'>
          <div className='flex flex-col items-start'>
            <Link className='flex flex-col justify-center items-center' to={`/store/${product.id}`}>
              <img className=" max-h-[300px] max-w-[280px] min-h-[200px] min-w-[200px] align-center justify-center my-2" src={product.image} alt={product.title} />
              <h5 className="max-w-[150px] text-xl font-semibold tracking-tight text-gray-900 text-center ">{product.title}</h5>
            </Link>
            <div className="flex">
              <span className="text-center font-bold text-red-600">Rating: {product.rating}</span>
              <span className="text-2xl text-left font-bold text-gray-900 ">{`${product.price}$ `}</span>
            </div>
          </div>
          {/* description side */}
          <div className='flex flex-col w-[200px] text-justify justify-between pb-1'>
            <p className='w-[200px] text-black'> Descripcion: {`${product.description}`}</p>
            <p className='w-[200px] text-black'> Categoria: {`${product.category}`}</p>
            <p className='text-black  '> Colores:
              <select className='ml-4 hover:bg-transparent' name="colorPicker" id="colorPicker">
                <option className='bg-red-800 hover:bg-transparent' value="red">Rojo</option>
                <option className='bg-yellow-400 hover:bg-transparent' value="yellow">Amarillo</option>
                <option className='bg-blue-950 hover:bg-transparent' value="blue">Azul</option>
              </select>
            </p>
            <p className='text-black '> Estado {`${product.status}`}</p>
            <a href="#" className=" mt-3 text-white bg-buttons hover:bg-b_hover font-medium rounded-lg text-sm px-5 py-2 text-center "> Agregar al carrito</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
