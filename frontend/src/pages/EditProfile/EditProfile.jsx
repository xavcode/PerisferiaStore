import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const EditProfile = () => {
	const { user, isLoading, isAuthenticated } = useAuth0();
	const [dataUser, setDataUser ] = useState({})
  const { id } = useParams();
  const userId = id;
  const navigation = useNavigate();
  useEffect(() => {
    const peticion = async () => {
      try {
        const userEdit = await axios.get(`http://localhost:3001/admin/user/${user.email}`) // /admin/user/:userMail
		const newuser = userEdit.data;
		setDataUser(newuser)
        setFormData(newuser);
        setInitialFormData(newuser)
      } catch (error) {
        console.error(error);
      }
    }
    peticion()
  },[userId])
  const [formData, setFormData] = useState({
    name:'',
    last_name: '',
    username: '',
    address: '',
    password: '',
    mail: '',
    phone: '',
  });
    
  const [initialFormData, setInitialFormData] = useState({});
  
  const handleChange = (event) => {
    const { name, value, files, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
    console.log(formData)
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let camposEditados = {campos:{}};
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        camposEditados.campos[key] = formData[key];
      }
    }
    try {
      const response = await axios.put(`http://localhost:3001/admin/user/${dataUser.id}`, camposEditados);
      console.log(response.data);
      navigation('/store')
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed justify-center flex flex-col items-center bg-gray-900 text-white py-3 px-16 mt-20 mb-5 w-full mx-4 rounded-lg">
        <Link to="/admin/users" className="text-gray-500 hover:text-gray-900 mb-2">
        <svg className="w-6 h-6  mr-2" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg></Link>
      <h2 className="text-3xl font-bold mb-4">Editar Usuario</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-2xl">
        <div>
          <label htmlFor="name" className="text-lg font-semibold">
            Nombre:
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
          <label htmlFor="last_name" className="text-lg font-semibold">
            Apellido:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="username" className="text-lg font-semibold">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-lg font-semibold">
            Dirección:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg font-semibold">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="mail" className="text-lg font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="img" className="text-lg font-semibold">
            Imagen:
          </label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-lg font-semibold">
            Teléfono:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div>
          <label htmlFor="isAdmin" className="text-lg font-semibold">
            Admin:
          </label>
          <input
            type="checkbox"
            id="isAdmin"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-lg py-2 px-3 mt-1 text-white"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded">
            Guardar
          </button>
          <button type="button" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;


// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import {FiEdit3} from "react-icons/fi"

// import { FaUserEdit } from "react-icons/fa";

// const EditProfile = () => {
// 	const { user, isLoading, isAuthenticated } = useAuth0();
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [phone, setPhone] = useState("");
// 	const [street, setStreet] = useState("");
// 	const [city, setCity] = useState("");
// 	const [country, setCountry] = useState("");
// 	const [postalCode, setPostalCode] = useState("");
// 	const [selectedField, setSelectedField] = useState("");

// 	const handleSave = () => {
// 		// Aquí puedes implementar la lógica para guardar los datos actualizados del perfil
// 	};

// 	if (isLoading) {
// 		return <div>Cargando...</div>;
// 	}

// 	return (
//     <div className="flex items-center justify-center mt-8" style={{ height: '125vh' }}>
//     <div className="max-w-xl w-full bg-white rounded-lg overflow-hidden shadow-lg p-6">
//       {isAuthenticated && (
//         <div className="flex items-center justify-center mb-8">
//           <div className="relative w-32 h-32 mr-4">
//             <img src={user.picture} alt="Avatar" className="rounded-full w-full h-full object-cover" />
//             <FaUserEdit className="absolute bottom-0 right-0 text-gray-500 text-2xl cursor-pointer" />
//           </div>
//         </div>
//       )}

//       {isAuthenticated && (
//         <>
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
//               Editar Perfil
//             </h2>
//           </div>

//           <div className="mb-8">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//               Información personal
//             </h3>
// 							<div className="flex flex-col text-gray-700">
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">Nombre:</label>
// 									<div className="flex items-center">
// 										<label className="mr-2">{name}</label>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="cursor-pointer"
// 												onClick={() => setSelectedField("Nombre")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">
// 										Correo electrónico:
// 									</label>
// 									<div className="flex items-center">
// 										<label className="mr-2">{email}</label>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="ml-auto cursor-pointer"
// 												onClick={() => setSelectedField("email")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">Teléfono:</label>
// 									<div className="flex items-center">
// 										<label className="mr-2">{phone}</label>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="cursor-pointer"
// 												onClick={() => setSelectedField("Teléfono")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						<div>
// 							<h3 className="text-2xl font-semibold mb-4 text-gray-800">
// 								Dirección de envío
// 							</h3>
// 							<div className="flex flex-col text-gray-700">
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">Calle:</label>
// 									<div className="flex items-center">
// 										<span>{street}</span>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="ml-auto cursor-pointer"
// 												onClick={() => setSelectedField("Calle")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">Ciudad:</label>
// 									<div className="flex items-center">
// 										<span>{city}</span>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="ml-auto cursor-pointer"
// 												onClick={() => setSelectedField("Ciudad")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">País:</label>
// 									<div className="flex items-center">
// 										<span>{country}</span>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="ml-auto cursor-pointer"
// 												onClick={() => setSelectedField("País")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mb-4">
// 									<label className="font-semibold mb-1">Código Postal:</label>
// 									<div className="flex items-center">
// 										<span>{postalCode}</span>
// 										<div className="flex items-center ml-auto">
// 											<FiEdit3
// 												className="ml-auto cursor-pointer"
// 												onClick={() => setSelectedField("Código Postal")}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						{selectedField && (
// 							<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
// 								<div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg p-6">
// 									<h3 className="text-2xl font-semibold mb-4 text-gray-800">
// 										Editar {selectedField}
// 									</h3>
// 									<div className="flex flex-col text-gray-700">
// 										<input
// 											type="text"
// 											value={
// 												selectedField === "Codigo Postal"
// 													? postalCode
// 													: selectedField === "País"
// 													? country
// 													: selectedField === "Ciudad"
// 													? city
// 													: selectedField === "Calle"
// 													? street
// 													: selectedField === "Teléfono"
// 													? phone
// 													: selectedField === "email"
// 													? email
// 													: name
// 											}
// 											onChange={e => {
// 												if (selectedField === "Codigo Postal") {
// 													setPostalCode(e.target.value);
// 												} else if (selectedField === "País") {
// 													setCountry(e.target.value);
// 												} else if (selectedField === "Ciudad") {
// 													setCity(e.target.value);
// 												} else if (selectedField === "Calle") {
// 													setStreet(e.target.value);
// 												} else if (selectedField === "Teléfono") {
// 													setPhone(e.target.value);
// 												} else if (selectedField === "email") {
// 													setEmail(e.target.value);
// 												} else {
// 													setName(e.target.value);
// 												}
// 											}}
// 											className="border border-gray-300 bg-white px-3 py-2 rounded-lg mb-4"
// 										/>
// 										<div className="flex justify-center">
// 											<button
// 												onClick={() => setSelectedField("")}
// 												className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
// 												Guardar
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						)}

// 						<div className="flex justify-center">
// 							<button
// 								onClick={handleSave}
// 								className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
// 								Guardar
// 							</button>
// 						</div>
// 					</>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default EditProfile;