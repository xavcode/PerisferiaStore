import React from 'react'

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../../context/DataContext';

const ProductsTable = () => {
  const { products } = useContext(DataContext)
  const [selectedProductId, setSelectedProductId] = useState(null);


  const handleEdit = (productId) => {
    // Lógica para editar el producto seleccionado
    setSelectedProductId(productId);
  };

  const handleDelete = (productId) => {
    // Lógica para borrar el producto seleccionado
    console.log(`Borrando producto con ID: ${productId}`);
  };


  return (
    <div className="flex  flex-col bg-gray-900 text-white py-8 px-10 mt-16 mx-4 rounded-lg h-screen w-full justify-start items-center overflow-y-auto">
      <div className=' w-full flex justify-around items-center'>
        <h2 className="text-3xl font-bold mb-4">Lista de Productos</h2>
        <button className='bg-blue-500 hover:bg-primary text-white font-bold py-2 px-4 mr-2 rounded ml-11'>
          <Link to='/admin/products/create' >Subir producto</Link>
        </button>
      </div>
      <div className='h-[70%] w-[70%] overflow-auto'>
        <table className=" w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Rating</th>
              <th>Accion</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td className='flex justify-center items-center w-full '><img className=' rounded-full w-20 h-20' src={product.img} alt="" /></td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td> <button className='btn btn-warning '>Editar</button></td>
                  <td> <button className='btn btn-error'>Borrar</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ProductsTable;