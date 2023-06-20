import React from 'react'
import { useState, useEffect } from 'react';
// import stats from '../../../assets/images/stats-image.jpg'


const Stats = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para simular la carga de datos de estadísticas desde el servidor
  const fetchData = () => {
    // Simulación de carga de datos
    setTimeout(() => {
      setUserCount(1568);
      setProductCount(234);
      setOrderCount(789);
    }, 2000);
  };

  // Cargar los datos de estadísticas al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 w-auto justify-center text-center text-black">
      
      <div className="bg-[#F9F8F1] rounded-lg shadow-md p-8 w-full">
        <h3 className="text-2xl font-bold mb-4 text-black">Usuarios</h3>
        <p className="text-4xl font-bold text-black">{userCount}</p>
      </div>
      <div className="bg-[#F9F8F1] rounded-lg shadow-md p-8 w-full ">
        <h3 className="text-2xl font-bold mb-4 text-black">Productos</h3>
        <p className="text-4xl font-bold text-black">{productCount}</p>
      </div>
      <div className="bg-[#F9F8F1] rounded-lg shadow-md p-8 w-full ">
        <h3 className="text-2xl font-bold mb-4 text-black">Órdenes</h3>
        <p className="text-4xl font-bold text-black">{orderCount}</p>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <h3 className="text-xl font-semibold">Productos más vendidos</h3>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 1</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 2</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 3</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 4</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 5</h4>
            </div>
          </div>
        </div>
      </div>

      

      <div className="bg-white shadow-lg rounded-lg p-4 w-full ">
        <h3 className="text-xl font-semibold">Productos mejor puntuados</h3>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 1</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 2</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 3</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 4</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 5</h4>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-4 w-full ">
        <h3 className="text-xl font-semibold">Productos menos vendidos</h3>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-red-800 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 1</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-red-800 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 2</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-red-800 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 3</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-red-800 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 4</h4>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="w-10 h-10 bg-red-800 rounded-full"></div>
            <div>
              <h4 className="font-semibold">Producto 5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Stats;