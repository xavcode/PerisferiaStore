import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ListaFavorito = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:3001/fav");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de favoritos:", error);
      }
    };

    fetchFavorites();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/fav/${id}`);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== id)
      );
      console.log("Eliminé el producto de favoritos:", id);
      Swal.fire(
        "Eliminado de favoritos",
        "El producto se ha eliminado de favoritos",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Error",
        "No se pudo eliminar el producto de favoritos",
        "error"
      );
    }
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setFavorites((prevFavorites) =>
      prevFavorites.map((favorite) => ({ ...favorite, selected: newSelectAll }))
    );
  };
  

  const handleCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;
    setFavorites((prevFavorites) =>
      prevFavorites.map((favorite) =>
        favorite.id === id ? { ...favorite, selected: isChecked } : favorite
      )
    );
  };

  const handleRemoveSelected = async () => {
    const selectedIds = favorites
      .filter((favorite) => favorite.selected)
      .map((favorite) => favorite.id);

    try {
      await Promise.all(
        selectedIds.map((id) => axios.delete(`http://localhost:3001/fav/${id}`))
      );
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => !selectedIds.includes(favorite.id))
      );
      console.log("Eliminé los productos de favoritos:", selectedIds);
      Swal.fire(
        "Eliminados de favoritos",
        "Los productos se han eliminado de favoritos",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Error",
        "No se pudieron eliminar los productos de favoritos",
        "error"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-md shadow-md">
        <div className="max-h-screen overflow-y-scroll">
          <div className="w-full h-96">
            <table className="w-full h-full">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th className="py-2 px-4 border-b text-black">
                    <button
                      onClick={toggleSelectAll}
                      className={`${
                        selectAll ? 'bg-gray-300' : 'bg-transparent'
                      } border-2 border-gray-300 rounded-md text-black py-2 px-4 opacity-75`}
                    >
                      Seleccionar todo
                    </button>
                  </th>
                  <th className="py-2 px-4 border-b text-black">Imagen</th>
                  <th className="py-2 px-4 border-b text-black">Nombre</th>
                  <th className="py-2 px-4 border-b text-black">Descripción</th>
                  <th className="py-2 px-4 border-b text-black">Precio</th>
                  <th className="py-2 px-4 border-b text-black">Rating</th>
                  <th className="py-2 px-4 border-b text-black">Acción</th>
                  <th className="py-2 px-4 border-b text-black"></th>
                </tr>
              </thead>
              <tbody>
                {favorites.map((favorite, index) => (
                  <tr key={favorite.id}>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="checkbox"
                        checked={favorite.selected || false}
                        onChange={(event) => handleCheckboxChange(event, favorite.id)}
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center">
                        <img
                          src={favorite.image}
                          className="py-2 px-4 w-24 h-24 hover:scale-110"
                          alt={favorite.name ? favorite.name : favorite.title}
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b text-black">
                      {favorite.name ? favorite.name : favorite.title}
                    </td>
                    <td className="py-2 px-4 border-b text-black">{favorite.description}</td>
                    <td className="py-2 px-4 border-b text-black">$ {favorite.price}</td>
                    <td className="py-2 px-4 border-b text-black">{favorite.rating}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => removeFromFavorites(favorite.id)}
                        className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {favorites.length > 0 && (
          <div className="flex justify-end p-4">
            <button
              onClick={handleRemoveSelected}
              className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600"
            >
              Eliminar favoritos seleccionados
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default ListaFavorito;
