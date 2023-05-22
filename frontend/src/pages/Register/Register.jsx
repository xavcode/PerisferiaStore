import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-shadow">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-4xl block font-semibold text-black text-center">
          <FaUserAlt className="inline-block align-middle text-4xl mr-2" />
          Registro
        </h1>
        <hr className="mt-3" />
        <div className="mt-6">
          <label htmlFor="username" className="block text-base mb-2 text-black">
            Nombre
          </label>
          <input
            type="text"
            id="username"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
            placeholder="Ingrese su Nombre..."
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2 text-black">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
            placeholder="Ingrese su Contraseña.."
          />
        </div>
        <div className="mt-3">
          <label htmlFor="confirm-password" className="block text-base mb-2 text-black">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirm-password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
            placeholder="Confirmar Contraseña..."
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
          >
            Registrar
          </button>
        </div>
        <div className="mt-5 text-center text-black">
          <p>O inicia sesión con:</p>
          <div className="flex justify-center mt-2 bg-white">
            <button className="bg-white text-black px-4 py-2 rounded-md mr-2 ">
            <FcGoogle className="inline-block align-middle text-4xl mr-2" /> 
              Google
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
            <AiFillFacebook className="inline-block align-middle text-4xl mr-2" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;