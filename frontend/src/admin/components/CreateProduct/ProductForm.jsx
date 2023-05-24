import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";

const CreateProductForm = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const { setUpdateFlag } = useContext(DataContext);

  const [newProduct, setNewProduct] = useState({
    file: null,
    previewImage: null,
    name: '',
    price: '',
    status: 'disponible',
    description: '',
    rating: '',
    category: ''

  })

  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setNewProduct({...newProduct, previewImage: URL.createObjectURL(selectedFile)})
  };

  const handleChange = (e) => {
    e.preventDefault();
    const valId = e.target.id
    const val = e.target.value
    setNewProduct({...newProduct, [valId]:val})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', newProduct.name);
    formData.append('price', newProduct.price);
    formData.append('status', newProduct.status);
    formData.append('description', newProduct.description);
    formData.append('rating', newProduct.rating);
    formData.append('category', newProduct.category);

    try {
      const response = await axios.post('http://localhost:3001/', formData);
      // console.log(response.data)
      alert('Producto creado con éxito')
      setUpdateFlag(true)
      navigate('/admin/products')
      // Realiza cualquier acción adicional que necesites aquí
    } catch (error) {
      console.error(error);
      // Handle error: Mostrar mensaje de error o tomar otra acción
    }
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-4/5 px-6">
        <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">


          <div>
            <label htmlFor="name" className="block font-semibold">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              value={newProduct.name}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="price" className="block font-semibold">
              Precio:
            </label>
            <input
              type="number"
              id="price"
              value={newProduct.price}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="status" className="block font-semibold">
              Estado:
            </label>

            <select className=" select mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full" name="status" id="status" onChange={handleChange}>
              <option value="disponible">Disponible</option>
              <option value="sin stock">Sin stock</option>
              <option value="eliminado">Eliminado</option>
            </select>

          </div>

          <div>
            <label htmlFor="description" className="block font-semibold">
              Descripción:
            </label>
            <textarea
              id="description"
              value={newProduct.description}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            ></textarea>
          </div>

          <div>
            <label htmlFor="rating" className="block font-semibold">
              Calificación:
            </label>

            <select name="rating" id="rating" value={newProduct.rating} onChange={handleChange}
              className=" select mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full ">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block font-semibold">
              Categoría:
            </label>
            <input
              type="text"
              id="category"
              value={newProduct.category}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="file" className="font-semibold">
              Archivo:
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Seleccionar Archivo
              </button>
              {newProduct.previewImage && (
                <img
                  src={newProduct.previewImage}
                  alt="Preview"
                  className="ml-4 h-20 w-20 object-cover rounded"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="col-span-1  btn btn-outline btn-success"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;




// import React, { useState } from 'react';
// import './formcss.css'
// import axios from 'axios';

// const CreateProductForm = () => {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [status, setStatus] = useState('');
//   const [description, setDescription] = useState('');
//   const [rating, setRating] = useState('');
//   const [category, setCategory] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', name);
//     formData.append('price', price);
//     formData.append('status', status);
//     formData.append('description', description);
//     formData.append('rating', rating);
//     formData.append('category', category);

//     try {
//       await axios.post('http://localhost:3001/', formData);
//       // El formulario se envió exitosamente
//       // Realiza cualquier acción adicional que necesites aquí
//     } catch (error) {
//       console.error(error);
//       // Handle error: Mostrar mensaje de error o tomar otra acción
//     }
//   };

//   return (
//     <div className='formstyle'>
// //      <div className='formDos'>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="file">Archivo:</label>
//       <input type="file" id="file" onChange={handleFileChange} />

//       <label htmlFor="name">Nombre:</label>
//       <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

//       <label htmlFor="price">Precio:</label>
//       <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

//       <label htmlFor="status">Estado:</label>
//       <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />

//       <label htmlFor="description">Descripción:</label>
//       <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

//       <label htmlFor="rating">Calificación:</label>
//       <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />

//       <label htmlFor="category">Categoría:</label>
//           <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />

//       <button type="submit">Enviar</button>
//         </form>
//       </div>
//       </div>
//   );
// };

// export default CreateProductForm;
