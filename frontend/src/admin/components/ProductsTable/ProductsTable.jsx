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
  const [deletedProductId, setDeletedProductId] = useState(null);

  const handleEdit = (productId) => {    
    setSelectedProductId(productId);
  };
  
  const handleDelete = async (productId) => {
    try {
      const confirmed = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el producto permanentemente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      });
  
      if (confirmed.isConfirmed) {
      const response = await axios.delete(`https://perisferiastore-production.up.railway.app/store/${productId}`);
      setDeletedProductId(productId);
      console.log('Producto eliminado', response.data);
  
      Swal.fire('Eliminado', 'El producto ha sido eliminado correctamente.', 'success');
      }
  
    } catch (error) {
      console.error('Error al eliminar', error);
      Swal.fire('Error', 'Ha ocurrido un error al intentar eliminar el producto.', 'error');
    }
  };
  
  return (
    <div className=" bg-transparent w-full flex flex-col fixed top-20 left-20 bg-gray-900 text-white rounded-lg justify-end overflow-y-auto">
      <div className='  flex gap-40 justify-center items-center mb-5'>
        <h2 className="text-[2rem]  mb-2">Lista de Productos</h2>
        <Link to='/admin/products/create' >
          <button className='btn btn-outline btn-success ml-20 '>Añadir producto
          </button>
        </Link>
      </div>
      <div className=' h-[500px] flex justify-center  '>
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
              if (product.id === deletedProductId) {
                return null; 
              }
              return (
                <tr className='border-b-2' key={idx}>
                  <th >{idx + 1}</th>
                  <td className=' w-[150px] flex justify-center '><img className=' rounded-full w-20 h-20' src={product.img} alt="" /></td>
                  <td>{startCase(product.name)}</td>
                  <td>{startCase(product.category)}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td className='w-[15%]' >
                    <Link to={`/admin/products/edit/${product.id}`}>
                      <button className='btn btn-outline btn-warning' onClick={() => handleEdit(product.id)}>Editar</button></Link></td>
                  <td> <button className='btn btn-outline btn-error' onClick={() => handleDelete(product.id)}>Borrar</button></td>
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
