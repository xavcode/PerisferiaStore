import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

import { FiltersContext } from "../../../context/FiltersContext";

const EditProduct = () => {
  const { categories } = useContext(FiltersContext);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    status: "disponible",
    rating: 1,
    quantity: 1,
    category: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:3001/store/${id}`)  //https://perisferiastore-production.up.railway.app/store${id}
      const response2 = await axios.put('http://localhost:3001/product', response)
      setFormData(response.data)
    }
    fetchProduct()
  }, [])

  const onSave = async (formData) => {
    try {
      const response = await axios.put('http://localhost:3001/product', formData);
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   Swal.fire({
    title: '¿Guardar cambios?',
    text: 'Esta acción guardará los cambios realizados.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      onSave(formData);
    } 
  });
};

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <div className="fixed justify-center flex flex-col items-center bg-gray-900 text-white py-3 px-16  mt-20 mb-5 w-full mx-4 rounded-lg">
      <Link
        to="/admin/products"
        className="text-gray-500 hover:text-gray-900 mb-2"
      >
        <svg className="w-6 h-6  mr-2" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>
      <h2 className="text-3xl font-bold mb-4">Editar Producto</h2>
      <form
        // onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 max-w-2xl"
      >
        <div>
          <label htmlFor="name" className="text-lg font-semibold">
            Producto:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-lg font-semibold">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
            rows={2}
          ></textarea>
        </div>
        <div>
          <label htmlFor="status" className="text-lg font-semibold">
            Estado:
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          >
            <option value="available">Disponible</option>
            <option value="unavailable">Sin Stock</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="text-lg font-semibold">
            Cantidad:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="rating" className="text-lg font-semibold">
            Rating:
          </label>
          <select
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="text-lg font-semibold">
            Categoría:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="price" className="text-lg font-semibold">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="image" className="text-lg font-semibold">
            Imagen:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button type="button" className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded" 
          onSubmit={handleSubmit}
          > 
            Guardar
          </button>
          <button
            type="button"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
//          submit
export default EditProduct;
