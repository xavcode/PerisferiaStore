import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';

const EditProfile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [dataUser, setDataUser] = useState({})
  const { id } = useParams();
  const userId = id;
  const navigation = useNavigate();

  useEffect(() => {
    const peticion = async () => {
      try {
        const userEdit = await axios.get(`https://perisferiastore-production.up.railway.app/admin/user/${user.email}`) // /admin/user/:userMail
        const newuser = userEdit.data;
        setDataUser(newuser)
        setFormData(newuser);
        setInitialFormData(newuser)
      } catch (error) {
        console.error(error);
      }
    }
    peticion()
  }, [userId])
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    username: '',
    address: '',
    // password: '',
    // mail: '',
    phone: '',
  });

  const [initialFormData, setInitialFormData] = useState({});

  const handleChange = (event) => {
    const { name, value, files, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let camposEditados = { campos: {} };
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        camposEditados.campos[key] = formData[key];
      }
    }

    // Utilizar SweetAlert2 para confirmar si se quieren guardar los cambios
    Swal.fire({
      title: 'Guardar cambios',
      text: '¿Estás seguro de que deseas guardar los cambios?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.put(`https://perisferiastore-production.up.railway.app/admin/user/${dataUser.id}`, camposEditados);

          // Mostrar mensaje de edición exitosa
          Swal.fire({
            title: 'Éxito',
            text: 'Los cambios han sido guardados exitosamente.',
            icon: 'success'
          });

          navigation('/profile');
        } catch (error) {
          console.error(error);
        }
      } else {
        // Mostrar mensaje de cancelación
        Swal.fire({
          title: 'Cancelado',
          text: 'No se han guardado cambios.',
          icon: 'info'
        });
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
        navigation('/');
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-xl p-8 bg-gray-800 rounded-lg animate-fadeIn">
        <Link to="/profile" className="text-gray-500 hover:text-gray-400 mb-2 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al perfil
        </Link>
        <h2 className="text-3xl font-bold mb-4 text-white">Editar Usuario</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="animate-slideInLeft">
            <label htmlFor="name" className="text-lg font-semibold text-white">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
            />
          </div>
          <div className="animate-slideInRight">
            <label htmlFor="last_name" className="text-lg font-semibold text-white">
              Apellido:
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
            />
          </div>
          <div className="animate-slideInLeft">
            <label htmlFor="username" className="text-lg font-semibold text-white">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
            />
          </div>
          <div className="animate-slideInRight">
            <label htmlFor="address" className="text-lg font-semibold text-white">
              Dirección:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
            />
          </div>
          <div className="animate-slideInLeft">
            <label htmlFor="img" className="text-lg font-semibold text-white">
              Imagen:
            </label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
            />
          </div>
          <div className="animate-slideInRight">
            <label htmlFor="phone" className="text-lg font-semibold text-white">
              Teléfono:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <button className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105">
              Guardar
            </button>
            <button type="button" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ml-4 transform transition-transform duration-300 hover:scale-105" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProfile;








// A LO LARGO

// return (
//   <div className="flex justify-center items-center bg-gray-900 min-h-screen">
//     <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow">
//       <Link to="/profile" className="text-gray-500 hover:text-gray-300 mb-4">
//         <svg className="w-6 h-6 mr-2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//         </svg>
//         Volver al perfil
//       </Link>
//       <h2 className="text-3xl font-bold mb-4 text-white">Editar Usuario</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="text-lg font-semibold text-white">
//             Nombre:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="last_name" className="text-lg font-semibold text-white">
//             Apellido:
//           </label>
//           <input
//             type="text"
//             id="last_name"
//             name="last_name"
//             value={formData.last_name}
//             onChange={handleChange}
//             className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="username" className="text-lg font-semibold text-white">
//             Usuario:
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="address" className="text-lg font-semibold text-white">
//             Dirección:
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="img" className="text-lg font-semibold text-white">
//             Imagen:
//           </label>
//           <input
//             type="file"
//             id="img"
//             name="img"
//             onChange={handleChange}
//             className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone" className="text-lg font-semibold text-white">
//             Teléfono:
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 mt-1 text-white"
//           />
//         </div>
//         <div className="flex justify-end">
//           <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mr-2" type="submit">
//             Guardar
//           </button>
//           <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button" onClick={handleCancel}>
//             Cancelar
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );
// };