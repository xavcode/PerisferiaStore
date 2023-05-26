import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Seguro que quieres eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: '#d33',
    }).then(async (result) => {
      if (result.isConfirmed) {
    console.log(`Borrando producto con ID: ${productId}`);
    const response = await axios.delete(` https://perisferiastore-production.up.railway.app/store${productId}`)    
  };
  })
}

  return (
    <div className=" bg-transparent w-full flex flex-col fixed top-20 left-20 bg-gray-900 text-white rounded-lg justify-end overflow-y-auto">
      <div className='  flex gap-40 justify-center items-center mb-5'>
        <h2 className="text-[2rem]  mb-2">Lista de Productos</h2>
        <button className='btn btn-outline btn-success ml-20 '>
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
                  <th >{idx + 1}</th>
                  <td className=' w-[150px] flex justify-center '><img className=' rounded-full w-20 h-20' src={product.img} alt="" /></td>
                  <td>{startCase(product.name)}</td>
                  <td>{startCase(product.category)}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td className='w-[15%]' > <Link to={`/admin/products/edit/${product.id}`}> <button className='btn btn-outline btn-warning'>Editar</button></Link></td>
                  <td> <button className='btn btn-outline btn-error' onClick={()=>handleDelete(product.id)}>Borrar</button></td>
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