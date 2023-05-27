import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FiltersContext } from "../../../context/FiltersContext";
import { startCase } from 'lodash';
import { DataContext } from "../../../context/DataContext";

const EditProduct = ({productId}) => {
  const { products } = useContext(DataContext)
  // const { categories } = useContext(FiltersContext);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: 0,
    image: "",
    status: "disponible",
    description: "",
    rating: 1, 
    category: "",
    quantity: 1,
  });
 
   console.log('aaaaa' , products);
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // setFormData((formData) => ({ ...formData, [name]: value }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     const productId = id; 
    try {
      const response = await axios.put(
        `http://localhost:3001/product/${productId}`,
        formData
      );
      // setFormData({
      //   ...formData,
      //   name: response.data.name,
      //   description: response.data.description,
      //   status: response.data.status,
      //   rating: response.data.rating,
      //   quantity: response.data.quantity,
      //   category: response.data.category,
      //   price: response.data.price,
      //   image: response.data.image,
      // });
      setFormData(response.data)
      console.log("respuesta correcta", response);
    } catch (error) {
      console.error("respuesta incorrecta", error);
    }
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
        onClick={handleSubmit}
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
            value={products.name}
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setFormData(e.target.value)}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
            />
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded"
            // onSubmit={handleSubmit}
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
export default EditProduct;

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const result = await Swal.fire({
//       title: '¿Estás seguro?',
//       text: 'Esto modificará los datos. ¿Deseas continuar?',
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonText: 'Sí',
//       cancelButtonText: 'No',
//     });
//     if (result.isConfirmed) {
//          const response = await axios.put(`http://localhost:3001/product/${id}`, formData);
//          Swal.fire('Éxito', 'El producto se modificó correctamente', 'success');
//          setFormData((prevFormData) => ({
//           ...prevFormData,
//           name: response.data.name,
//           description: response.data.description,
//           status:  response.data.status,
//           rating:  response.data.rating,
//           quantity:  response.data.quantity,
//           category:  response.data.category,
//           price:  response.data.price,
//           image:  response.data.image,
//         }));
//          console.log('respuesta correcta' , response.data);
//   } else if (response.dismiss === Swal.DismissReason.cancel) {
//     Swal.fire('Cancelado', 'No se realizó ninguna modificación', 'info');
//   }
//   } catch (error) {
//     console.error('respuesta incorrecta' , error);
//     Swal.fire('Error', 'Ocurrió un error al modificar el producto', 'error')
//   }
// };  