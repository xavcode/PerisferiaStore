import React from 'react'
import axios from 'axios'

import { useState } from 'react';

const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    status: 'disponible',
    rating: 3,
    price: 0,
    img: '',
    my_file: null
  });



  const handleChange = (e) => {
    const tag = e.target.id
    const val = (e.target.value)
    setFormData({ ...formData, [tag]: val })
    console.log({ [tag]: val })
  };

  const handleSelectFile = (e) => {
    const file = e.target.files[0]
    setFormData({ ...formData, my_file: file });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/", formData)
      setRes(response)
      // setRes(res.data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-3 px-10 mt-16  w-full  h-screen ">
      <h2 className=" items-center justify-center text-3xl font-bold mb-4">Subir Producto</h2>
      <div className='flex flex-col justify- items-center w-[400px] p-2'>
        <div className='flex'>
          <form onSubmit={handleSubmit} className=" w-full flex flex-col justify-between mx-auto m-2 p-2 " encType='enctype="multipart/form-data' >
            <div className="mb-4 flex gap-2 items-center justify-between ">
              <label htmlFor="name" className="text-lg font-semibold">
                Producto:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
              />
            </div>

            <div className="mb-4 flex gap-2 items-center justify-between">
              <label htmlFor="description" className="text-lg font-semibold">
                Descripción:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
                rows={2}
              ></textarea>
            </div>

            <div className='flex mb-4 gap-2 justify-between items-center w-[400px]'>
              <label htmlFor="status" className="text-lg font-semibold">
                Categoria:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
              >
                <option value="any">Seleccionar</option>
                <option value="keyboards">Auriculares</option>
                <option value="headsets">Auriculares</option>
                <option value="mouses">Mouses</option>
              </select>

              {/* <img src="" alt="img_product" className='w-[150px] h-[150px] bg-white rounded-lg text-black' /> */}
            </div>
            <div className="mb-4 flex gap-2 items-center justify-between">
              <label htmlFor="quantity" className="text-lg font-semibold">
                Cantidad:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
              />
            </div>
            <div className="mb-4 flex gap-2 items-center justify-between">
              <label htmlFor="status" className="text-lg font-semibold">
                Estado:
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
              >
                <option value="available">Disponible</option>
                <option value="unavailable">Sin Stock</option>
              </select>
            </div>
            <div className="mb-4 flex gap-2 items-center justify-between">
              <label htmlFor="rating" className="text-lg font-semibold">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
              />
            </div>
            <div className="mb-4 flex gap-2 items-center justify-between">
              <label htmlFor="price" className="text-lg font-semibold">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleChange}
                value={formData.price}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
              />
            </div>
            <div className="mb-4 flex gap-2 items-center justify-between">
              <label htmlFor="image" className="text-lg font-semibold">
                Imagen:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleSelectFile}
                className="w-60 bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white flex "
              />
            </div>

            <div className='flex justify-between items-center'>
              <img src="" alt="img_product" className='w-[150px] h-[150px] bg-white rounded-lg text-black' />
              {/* <button
                onClick={handleUpload}
                className="bg-white hover:bg-primary text-gray-700 h-16 font-bold py-2 px-4 rounded w-40"
                id='btn_create'
              >
                Añadir imagen
              </button> */}

              <button
                type='submit'
                // onSubmit={handleSubmit}
                className="bg-white hover:bg-primary text-gray-700 h-16 font-bold py-2  mt-4 rounded w-40 items-center flex  justify-center"
                id='btn_create'
              >
                Crear Producto
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;