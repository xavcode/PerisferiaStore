import React, { useContext } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <nav className="bg-gray-800 p-4 w-full">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold text-center">Mi Perfil</h1>
        </div>
      </nav>
      <div className="container mx-auto p-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full">
                <RiUser3Fill size={48} className="text-blue-500" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-black">
                {userData.name} {userData.lastName}
              </h2>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-black">
                Información de Perfil
              </h3>
              <div className="mt-6">
                <div className="flex items-center">
                  <label className="text-gray-600 mr-2">Nombre:</label>
                  <p className="text-gray-800">{userData.name}</p>
                </div>
                <div className="flex items-center mt-4">
                  <label className="text-gray-600 mr-2">
                    Correo Electrónico:
                  </label>
                  <p className="text-gray-800">{userData.mail}</p>
                </div>
                <div className="flex items-start mt-4">
                  <label className="text-gray-600 mr-2">Biografía:</label>
                  <p className="text-gray-800">{userData.biography}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                to="/profile/edit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Editar Perfil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;