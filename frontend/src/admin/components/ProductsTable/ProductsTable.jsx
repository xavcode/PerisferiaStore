import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../../../context/DataContext';
import { startCase } from 'lodash';
import axios from 'axios';

const ProductsTable = () => {
  const { products } = useContext(DataContext)
  const [selectedProductId, setSelectedProductId] = useState(null);


  const handleEdit = (productId) => {    
    setSelectedProductId(productId);
  };

  const handleDelete = async (productId) => {
    console.log(`Borrando producto con ID: ${productId}`);
    const response = await axios.delete(`http://localhost:3001/store/${productId}`)    
  };

  return (
    <div className=" bg-transparent flex  flex-col fixed top-20 left-[200px] bg-gray-900 text-white rounded-lg justify-end overflow-y-auto">
      <div className='  flex gap-40  justify-center items-center mb-5'>
        <h2 className="text-[2rem]  mb-2">Lista de Productos</h2>
        <button className='bg-blue-500 hover:bg-primary text-white text-[1.5rem] p-2 rounded-md '>
          <Link to='/admin/products/create' >Subir producto</Link>
        </button>
      </div>
      <div  className=' h-[500px] flex justify-center  '>
        <table className=" table-compact text-[1.3rem]  mr-10 text-center overflow-auto">
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
                <tr className='border-b-2' key={idx}>
                  <th>{idx + 1}</th>
                  <td className='flex justify-center items-center  '><img className=' rounded-full w-20 h-20' src={product.img} alt="" /></td>
                  <td>{startCase(product.name)}</td>
                  <td>{startCase(product.category)}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td className='w-[15%]' > <Link to={`/admin/products/edit/${product.id}`}> <button className='btn bg-primary text-white '>Editar</button></Link></td>
                  <td> <button className='btn text-white bg-red-800' onClick={()=>handleDelete(product.id)}>Borrar</button></td>
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