import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    username: '',
    address: '',
    password: '',
    mail: '',
    img: '',
    phone: '',
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    try {
      const response = await axios.post('http://localhost:3001/user', formData) // https://perisferiastore-production.up.railway.app/user
    } catch (error) {
      console.log(error)
      throw new Error (error)
    }
  };

  return (
    <div className='w-full flex justify-center '>

      <div className=" flex flex-col h-screen items-center  fixed top-20 bg-gray-900 overflow-y-auto">
        <h2 className="text-[2rem] mb-2 justify-center ">Crear Usuario</h2>
        <form className="max-w-screen-xl " onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-lg">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="last_name" className="text-lg">
                Apellido
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="text-lg">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="text-lg">
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-lg">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="mail" className="text-lg">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="img" className="text-lg">
                Imagen
              </label>
              <input
                type="text"
                id="img"
                name="img"
                value={formData.img}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-lg">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="isAdmin" className="flex items-center">
                <input
                  type="checkbox"
                  id="isAdmin"
                  name="isAdmin"
                  checked={formData.isAdmin}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-lg">Es Administrador</span>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-primary text-white text-lg py-3 px-6 rounded-md"
            >
              Crear Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}