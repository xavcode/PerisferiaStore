import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", formData);
      setUserData(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-shadow">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-4xl block font-semibold text-black text-center">
          <FaUserAlt className="inline-block align-middle text-4xl mr-2" />
          Registro
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="text"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
              placeholder="Nombre"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              id="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
              placeholder="Email"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              id="confirmPassword"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
              placeholder="Confirmar Contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="border-2 border-blue-500 bg-blue-500 text-white py-1 w-full rounded-md hover:bg-blue-700  hover:text-blue-500 font-semibold"
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="mt-2 text-center text-black">
          <p>O inicia sesión con:</p>
          <div className="flex justify-center mt-2 bg-white">
            <button className="border-2 border-gray-600 w-full bg-white text-black px-4 py-2 rounded-md mr-2 ">
              <FcGoogle className="inline-block align-middle text-4xl mr-2" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;