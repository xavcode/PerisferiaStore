import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";

const CreateUserForm = () => {
    const { id } = useParams()
    const [formData, setFormData] = useState({
    id: id, 
    name: '',
    last_name: '',
    username: '',
    address: '',
    password: '',
    mail: '',
    phone: '',
  });
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: selectedFile,
      previewImage: URL.createObjectURL(selectedFile),
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('aaaa',formData);
    const result = await Swal.fire({
      title: "¿Estás seguro de crear el usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
    const { file, ...data } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append('file', file);
    Object.entries(data).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    try {
      const response = await axios.post('https://perisferiastore-production.up.railway.app/user', formDataToSend);
      Swal.fire(
        "¡Usuario creado!",
        "El usuario ha sido creado exitosamente.",
        "success"
        );
        console.log('Respuesta del servidor:', response.data);
        navigate('/admin/users');
      } catch (error) {
      console.error('Error:', error);
    }
  } else if (result.isDenied) {
    Swal.fire("Cancelado", "No se ha creado ningún usuario.", "info");
  }
  };

   const handleSubmitoo = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "¿Estás seguro de crear el usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      try {
        await axios.post("https://perisferiastore-production.up.railway.app/user", formData);
        Swal.fire(
          "¡Usuario creado!",
          "El usuario ha sido creado exitosamente.",
          "success"
        );
      } catch (error) {
        throw new Error(error);
      }
    } else if (result.isDenied) {
      Swal.fire("Cancelado", "No se ha creado ningún usuario.", "info");
    }
  };
 

  const isFormValid = () => {
    const {
      name,
      last_name,
      username,
      address,
      password,
      previewImage,
      mail,
      phone,
    } = formData;
    return name !== "" && last_name !== "" && username !== "" && address !== "" && password !== "" && previewImage !== "" && mail !== "" && phone !== "";
  }; 

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-4/5 px-6">
        
        <Link to="/admin/users" className="text-gray-100 hover:text-gray-600 mb-2">
            <svg className="w-6 h-6  mr-2" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
          </Link>

        <h2 className="text-2xl font-bold mb-4">Crear Usuario</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-semibold">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block font-semibold">
              Apellido:
            </label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="username" className="block font-semibold">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="address" className="block font-semibold">
              Dirección:
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="mail" className="block font-semibold">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
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
              {formData.previewImage && (
                <img
                  src={formData.previewImage}
                  alt="Preview"
                  className="ml-4 h-20 w-20 object-cover rounded"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="col-span-1  btn btn-outline btn-success"
            disabled={!isFormValid()}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
// import React from 'react'
// import axios from 'axios';
// import { useState, useRef } from 'react';

// export function CreateUserForm() {
//   const fileInputRef = useRef();
//   const [file, setFile] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     last_name: '',
//     username: '',
//     address: '',
//     password: '',
//     previewImage: '',
//     mail: '',
//     phone: '',
//     is_admin: 'unchecked',
//   });

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setFormData({ ...formData, previewImage: URL.createObjectURL(selectedFile) })
//   };
  
//   const handleChange = (e) => {
    
//     const valId = e.target.id
//     const val = e.target.value
//     setFormData({ ...formData, [valId]: val })
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://perisferiastore-production.up.railway.app/user', formData) // https://perisferiastore-production.up.railway.app/user
//       console.log(formData)
//     } catch (error) {
//       throw new Error(error)
//     }
//   };

//   return (
//     <div className='w-full flex justify-center '>

//       <div className=" flex flex-col h-screen items-center  fixed top-20 bg-gray-900 overflow-y-auto">
//         <h2 className="text-[2rem] mb-2 justify-center ">Crear Usuario</h2>
//         <form className="max-w-screen-xl " onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="text-lg">
//                 Nombre
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="last_name" className="text-lg">
//                 Apellido
//               </label>
//               <input
//                 type="text"
//                 id="last_name"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="username" className="text-lg">
//                 Usuario
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="address" className="text-lg">
//                 Dirección
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="text-lg">
//                 Contraseña
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="mail" className="text-lg">
//                 Correo Electrónico
//               </label>
//               <input
//                 type="email"
//                 id="mail"
//                 name="mail"
//                 value={formData.mail}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>
          
//             <div>
//               <label htmlFor="phone" className="text-lg">
//                 Teléfono
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
//                 required
//               />
//             </div>

//             <div className='flex flex-col items-start justify-between'>
//               <label htmlFor="file" className="font-semibold">
//                 Archivo:
//               </label>
//               <div className="flex items-center">
//                 <input
//                   type="file"
//                   id="file"
//                   ref={fileInputRef}
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current.click()}
//                   className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//                 >
//                   Seleccionar Archivo
//                 </button>
//                 {formData.previewImage && (
//                   <img
//                     src={formData.previewImage}
//                     alt="Preview"
//                     className="ml-4 h-20 w-20 object-cover rounded"
//                   />
//                 )}
//               </div>
//             </div>



//             <div className="col-span-2">
//               <label htmlFor="isAdmin" className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isAdmin"
//                   name="isAdmin"
//                   // checked={formData.isAdmin}
//                   value={formData.is_admin}
//                   onChange={handleChange}
//                   className="mr-2 leading-tight"
//                 />
//                 <span className="text-lg">Es Administrador</span>
//               </label>
//             </div>
//           </div>
//           <div className="mt-6">
//             <button
//               className="bg-blue-500 hover:bg-primary text-white text-lg py-3 px-6 rounded-md"
//             >
//               Crear Usuario
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



{/* const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const result = await Swal.fire({
      title: "¿Estás seguro de crear el usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      try {
        await axios.post("https://perisferiastore-production.up.railway.app/user", formData);
        Swal.fire(
          "¡Usuario creado!",
          "El usuario ha sido creado exitosamente.",
          "success"
        );
      } catch (error) {
        throw new Error(error);
      }
    } else if (result.isDenied) {
      Swal.fire("Cancelado", "No se ha creado ningún usuario.", "info");
    }
  };
 */}