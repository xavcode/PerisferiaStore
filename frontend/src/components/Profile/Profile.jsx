import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [dataLoaded, setDataLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    username: '',
    address: '',
    password: '',
    mail: '',
    phone: '',
  });

  useEffect(() => {
    if (user) {
      const datosDelUsuario = async () => {
        try {
          const userData = await axios.get(`https://perisferiastore-production.up.railway.app/admin/user/${user.email}`);
          const { name, last_name, mail, phone, address, username} = userData.data;
          setFormData(prevFormData => ({
            ...prevFormData,
            name: name || prevFormData.name,
            last_name: last_name || prevFormData.last_name,
            mail: mail || prevFormData.mail,
            phone: phone || prevFormData.phone,
            address: address || prevFormData.address,
            username: username || prevFormData.username
          }));
          

          setDataLoaded(true);
          // console.log('Datos cargados en el estado formData:', formData);
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
        }
      };

      datosDelUsuario();
    }
  }, [user]); // Agregamos 'user' como dependencia del useEffect

  useEffect(() => {
    if (!isLoading) {
      setDataLoaded(true);
    }
  }, [isLoading]); // Agregamos 'isLoading' como dependencia del useEffect

  if (isLoading || !dataLoaded) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center mt-8 bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl px-6 py-8 transform transition-all duration-500 hover:shadow-2xl">
        {isAuthenticated && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Perfil</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-32 h-32 rounded-full bg-gray-700 overflow-hidden transform transition-all duration-500 hover:scale-110">
                <img
                  src={user.picture}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Información personal</h3>
              <div className="text-gray-300">
                <div className="mb-2">
                  <span className="font-semibold">Nombre:</span> {formData.name || user.name}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Apellido:</span> {formData.last_name || user.given_family}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Usuario:</span> {formData.username || user.username}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Correo electrónico:</span> {formData.mail || user.email}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Teléfono:</span> {formData.phone || '1234567890'}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Dirección de envío:</span> {formData.address || 'Sin Calle'}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                to="/profile/edit"
                className="bg-white hover:bg-primary text-gray-700 font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105"
              >
                Editar perfil
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}  

export default Profile;

{/* <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Dirección de envío</h3>
<div className="text-gray-700">
  <div className="mb-2">
    <span className="font-semibold">Calle:</span> {formData.address || 'Calle por defecto'}
  </div> */}
  {/* <div className="mb-2">
    <span className="font-semibold">Ciudad:</span> {formData.city || 'Ciudad Principal'}
  </div>
  <div className="mb-2">
    <span className="font-semibold">País:</span> {formData.country || 'País Principal'}
  </div>
  <div className="mb-2">
    <span className="font-semibold">Código Postal:</span> {formData.zipCode || '5300'}
  </div> */}