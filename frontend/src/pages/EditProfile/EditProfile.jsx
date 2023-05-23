import React, { useContext } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const EditProfile = () => {
    const { userData, setUserData } = useContext(UserContext);
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setUserData((prevState) => ({ ...prevState, [id]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put("https://perisferiastore-production.up.railway.app/store/users/" + userData.id, userData);
        console.log(response.data);
        alert("Cambios guardados exitosamente");
      } catch (error) {
        console.error(error);
        alert("Error al guardar los cambios");
      }
    };

  return (
    <div className="min-h-screen bg-shadow flex flex-col justify-center items-center">
      <nav className="bg-shadow p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold text-center">
            Editar Perfil
          </h1>
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
                {userData.name}
              </h2>
            </div>
            <div className="mt-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-gray-600 block">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Ingrese su Nombre"
                    value={userData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-600 block">Apellido:</label>
                  <input
                    type="text"
                    id="lastName"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Ingrese su Apellido"
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-600 block">Teléfono:</label>
                  <input
                    type="tel"
                    id="phone"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Confirme su Teléfono"
                    value={userData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-600 block">Contraseña:</label>
                  <input
                    type="password"
                    id="password"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Ingrese su Contraseña"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <div>
                    <label className="text-gray-600 block">
                      Confirmar Contraseña:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                      placeholder="Confirme su Contraseña"
                      value={userData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-600 block">
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    id="mail"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Ingrese Correo Electrónico nuevo"
                    value={userData.mail}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-600 block">
                    Confirmar Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    id="confirmMail"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Confirme el Correo Electrónico"
                    value={userData.confirmMail}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-600 block">Biografía:</label>
                  <textarea
                    id="biography"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
                    placeholder="Breve descripción sobre el usuario."
                    value={userData.biography}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;