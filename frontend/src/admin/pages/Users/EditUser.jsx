import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';

const EditUser = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const { id } = useParams();
  const userId = id;
  const navigation = useNavigate();
  useEffect(() => {
    const peticion = async () => {
      try {
        const userEdit = await axios.get(`https://perisferiastore-production.up.railway.app/admin/users/${userId}`) // /admin/user/:userMail
        const user = userEdit.data
        setFormData(user);
        setInitialFormData(user)
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
    const confirmResult = await Swal.fire({
      title: 'Guardar cambios',
      text: '¿Estás seguro de que deseas guardar los cambios?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    });

    if (confirmResult.isConfirmed) {
    let camposEditados = {campos:{}};
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        camposEditados.campos[key] = formData[key];
      }
    }
    try {
      const response = await axios.put(`https://perisferiastore-production.up.railway.app/admin/user/${userId}`, camposEditados);
      console.log(response.data);
      Swal.fire('Cambios guardados', 'Los cambios se guardaron correctamente.', 'success');
      navigation('/admin/users')
    } catch (error) {
      console.error(error);
    }
  };
}

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
        navigation('/admin/users');
      }
    });
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

        {/* <div>
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
        </div> */}

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
          <button type="button" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
