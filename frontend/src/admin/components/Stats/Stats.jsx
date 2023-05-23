import React from 'react'
import { useState, useEffect } from 'react';
// import stats from '../../../assets/images/stats-image.jpg'


const Stats = () => {
    const [userCount, setUserCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

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
        <div className="flex flex-wrap w-full ml-16 justify-center gap-3 text-center">
            <div className="bg-[#E9EEF5] rounded-lg shadow-md p-8 w-full lg:w-1/4">
                <h3 className="text-2xl font-bold mb-4 text-black">Usuarios</h3>
                <p className="text-4xl font-bold text-black">{userCount}</p>
            </div>
            <div className="bg-[#E9EEF5] rounded-lg shadow-md p-8 w-full lg:w-1/4">
                <h3 className="text-2xl font-bold mb-4 text-black">Productos</h3>
                <p className="text-4xl font-bold text-black">{productCount}</p>
            </div>
            <div className="bg-[#E9EEF5] rounded-lg shadow-md p-8 w-full lg:w-1/4">
                <h3 className="text-2xl font-bold mb-4 text-black">Órdenes</h3>
                <p className="text-4xl font-bold text-black">{orderCount}</p>
            </div>
            <div className="bg-[#E9EEF5] rounded-lg shadow-md p-8 w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-2 text-black">Compras</h3>
                <img src='https://idealex.press/wp-content/uploads/2020/02/ciadi-paises-miembros.jpg' alt="" />
                
                {/* Coloca aquí tu gráfico */}
            </div>
        </div>
    );
};

export default Stats;