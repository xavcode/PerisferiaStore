import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import avatar from "../../../assets/images/profile-default-image.png";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth0(); // Obtén el usuario actual del Auth0

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios("http://localhost:3001/userAct");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    console.log("Editar usuario con ID:", userId);
  };

  const handleDelete = async (userId) => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar el usuario?",
      showCancelButton: true,
      confirmButtonText: "Sí,eliminar",
      cancelButtonText: "No",
      reverseButtons: true,
      icon: "warning",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`http://localhost:3001/admin/user/decline/${userId}`);
          console.log("Usuario borrado con éxito");
          Swal.fire("Éxito", "El usuario se eliminó correctamente", "success");
  
          // Enviar el correo electrónico solo al usuario eliminado
          const deletedUser = users.find((user) => user.id === userId);
          await axios.post("http://localhost:3001/send-email", {
            to: deletedUser.mail,
            subject: "Usuario eliminado",
            message: `Tu Usuario fue eliminado de nuestro sitio Web. Si quieres reactivarlo, comunícate a este Correo Electrónico: "perisferiastore@gmail.com". Muchas gracias`,
          });
          console.log("Correo electrónico enviado");
  
          // Actualizar la lista de usuarios en el estado local
          const updatedUsers = users.filter((user) => user.id !== userId);
          setUsers(updatedUsers);
        } catch (error) {
          console.error("Error al borrar el usuario:", error);
          Swal.fire("Error", "No se pudo borrar el usuario", "error");
        }
      }
    });
  };
  
  
  return (
    <div className=" bg-transparent w-full flex flex-col fixed top-20 left-20 bg-gray-900 text-white rounded-lg justify-end overflow-y-auto">
      <div className=" flex gap-40 justify-center items-center mb-5">
        <h2 className="text-[2rem] mb-2">Lista de Usuarios</h2>
        <Link to="/admin/users/create">
          <button className="btn btn-outline btn-success">Crear usuario</button>
        </Link>
      </div>
      <div className=" h-[500px]  m-auto justify-center">
        <table className="  text-[1.3rem] mr-10 text-center">
          <thead>
            <tr className="border-b-2">
              <th></th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Acción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr className="max-h-[150px]" key={idx}>
                  <th>{idx + 1}</th>
                  <td className="w-[150px] h-[150px] flex justify-center items-center ">
                    <img
                      className="rounded-full w-20 h-20"
                      src={user.img}
                      alt=""
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.username}</td>
                  <td>{user.mail}</td>
                  <td className="w-[15%]">
                    <Link to={`/admin/users/edit/${user.id}`}>
                      <button
                        className="btn btn-outline btn-warning"
                        onClick={() => handleEdit(user.id)}
                      >
                        Editar
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => handleDelete(user.id)}
                      disabled={isLoading}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;









