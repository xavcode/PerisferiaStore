import React, { useState, useRef } from "react";
import axios from "axios";
import { startCase } from "lodash";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { FiltersContext } from "../../../context/FiltersContext";

const CreateProductForm = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { setUpdateFlag } = useContext(DataContext);
  const { categories } = useContext(FiltersContext);
  const [newProduct, setNewProduct] = useState({
    file: null,
    previewImage: null,
    name: "",
    price: "",
    status: "disponible",
    description: "",
    rating: 5,
    category: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setNewProduct({
      ...newProduct,
      previewImage: URL.createObjectURL(selectedFile),
    });
  };

  const handleChange = (e) => {
    const valId = e.target.id;
    const val = e.target.value;
    setNewProduct({ ...newProduct, [valId]: val });
  };

  const handleConfirmation = () => {
    const confirmation = window.confirm("¿Desea crear el producto?");
    if (confirmation) {
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.status &&
      newProduct.description &&
      newProduct.rating &&
      newProduct.category &&
      file
    ) {
      Swal.fire({
        title: "Creación de un producto",
        text: "¿Estás seguro de que deseas crear el producto?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        cancelButtonColor: "#d33",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("name", newProduct.name);
          formData.append("price", newProduct.price);
          formData.append("status", newProduct.status);
          formData.append("description", newProduct.description);
          formData.append("rating", newProduct.rating);
          formData.append("category", newProduct.category);

          try {
            console.log('aaaa');
            axios
              .post("http://localhost:3001/productCreate", formData)
              .then(() => {
                Swal.fire("Éxito", "Producto creado con éxito", "success").then(
                  () => {
                    setUpdateFlag(true);
                    navigate("/admin/products");
                  }
                );
              })
              // .catch((error) => {
              //   console.error(error);
              //   console.log('leo');
              //   Swal.fire(
              //     "Error",
              //     "Ha ocurrido un error al crear el producto",
              //     "error"
              //   );
              // });
          } catch (error) {
            console.error(error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // El usuario hizo clic en "No" o en el botón de cancelar
          Swal.fire("Cancelado", "No se ha creado el producto", "info");
        }
      });
    } else {
      Swal.fire("Error", "Completa todos los campos");
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
              value={newProduct.name.toLowerCase()}
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
              min={0}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="status" className="block font-semibold">
              Estado:
            </label>

            <select
              className=" select mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
              name="status"
              id="status"
              onChange={handleChange}
            >
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
              maxLength={100}
            ></textarea>
          </div>

          <div>
            <label htmlFor="rating" className="block font-semibold">
              Calificación:
            </label>

            <select
              name="rating"
              id="rating"
              value={newProduct.rating}
              onChange={handleChange}
              className=" select mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full "
            >
              <option selected disabled>
                Seleccionar uno
              </option>
              <option value={1}>1⭐</option>
              <option value={2}>2⭐⭐</option>
              <option value={3}>3⭐⭐⭐</option>
              <option value={4}>4⭐⭐⭐⭐</option>
              <option value={5}>5⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block font-semibold">
              Categoría:
            </label>
            <select
              className="select mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
              name="category"
              id="category"
              onChange={handleChange}
              required
            >
              Category
              <option value="">Seleccionar</option>
              {categories.map((cat) => {
                return (
                  <option key={cat} value={cat}>
                    {startCase(cat)}
                  </option>
                );
              })}
            </select>
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
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;

