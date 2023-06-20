import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FiltersContext } from "../../../context/FiltersContext";
import { DataContext } from "../../../context/DataContext";
import { startCase } from "lodash";

const EditProduct = () => {
  const { products } = useContext(DataContext);
  const { categories } = useContext(FiltersContext);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    // id: id,
    name: "",
    price: 0,
    image: "",
    status: "disponible",
    description: "",
    rating: 1,
    category: [],
    quantity: 1,
  });
  const navigation = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://perisferiastore-production.up.railway.app/store/${id}`) //https://perisferiastore-production.up.railway.app/store${id}
        const product = response.data;
        if (product) {
          setFormData(product)
        }
      } catch (error) {
        console.error(error)
      }
      // console.log(response.data)
      }
      fetchProduct()
  }, [id])
  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setFormData(product);
    }
}, [id, products]);
      
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (event) => {
    console.log('<<<<<', formData);
    event.preventDefault();
    Swal.fire({
      title: "¿Guardar cambios?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const responseProductUpdated = await axios.put(
            `https://perisferiastore-production.up.railway.app/product`,
            formData
          );
          console.log("respuesta correcta", responseProductUpdated);
          Swal.fire({
            title: "¡Cambios guardados!",
            text: "Los cambios se guardaron correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
          window.location.href = "/store";
        } catch (error) {
          console.error("respuesta incorrecta", error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("Cambios cancelados");
      }
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: 'Cancelar',
      text: '¿Estás seguro de que deseas cancelar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        navigation('/admin/products');
      }
    });
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
        onSubmit={handleSubmit}
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
            value={startCase(formData.name)}
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
            <option selected disabled>
              Seleccionar uno</option>
             <option value="1">1⭐</option>
           <option value="2">2⭐⭐</option>
            <option value="3">3⭐⭐⭐</option>
            <option value="4">4⭐⭐⭐⭐</option>
            <option value="5">5⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="text-lg font-semibold">
            Categoría:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          >
            <option selected disabled>
                Seleccionar uno
              </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {startCase(category)}
              </option>
            ))}
          </select>
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
            value={formData.image}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
          <button
            type="button"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancelar
          </ button>
        </div>
      </form>
    </div>
  );
};
export default EditProduct;
