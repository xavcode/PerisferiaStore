import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-8">
      <div className="max-w-xl w-full bg-white rounded-lg overflow-hidden shadow-lg p-6">
        {isAuthenticated && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Perfil</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-36 h-36 mr-4">
                <img src={user.picture} alt="Avatar" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Información personal</h3>
              <div className="text-gray-700">
                <div className="mb-2">
                  <span className="font-semibold">Nombre:</span> {user.name}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Correo electrónico:</span> {user.email}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Teléfono:</span> 1234567890
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Dirección de envío</h3>
              <div className="text-gray-700">
                <div className="mb-2">
                  <span className="font-semibold">Calle:</span> Calle Principal
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Ciudad:</span> Ciudad Principal
                </div>
                <div className="mb-2">
                  <span className="font-semibold">País:</span> País Principal
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Código Postal:</span> 5300
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
