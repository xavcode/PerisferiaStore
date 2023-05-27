import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-8 ">
      <div className="max-w-md w-full bg-slate-200 rounded-md overflow-hidden shadow-md">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-35 h-35  mr-4 ">
              {isAuthenticated && <img src={user.picture} alt="Avatar" className="rounded-md w-full  m-1 h-full " />}
            </div>
          </div>
          {isAuthenticated && (
            <>
              <div className="mb-4">
                <h2 className=" flex  items-center justify-center text-xl font-bold mb-2 text-gray-500 m-2">Información personal</h2>
                <p className="text-gray-500">
                  <span className="font-semibold">Nombre:</span> {user.name}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Correo electrónico:</span> {user.email}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Teléfono:</span> 1234567890
                </p>

              </div>
              <div className="mb-4">
                <h2 className="flex  items-center justify-center text-xl font-bold mb-2 text-gray-500">Dirección de envío</h2>
                <p className="text-gray-500">
                  <span className="font-semibold">Calle:</span> Calle Principal
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Ciudad:</span> Ciudad Principal
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">País:</span> País Principal
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Código Postal:</span> 5300
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
