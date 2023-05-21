import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await axios('http://localhost:3001/users/');
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    // Lógica para manejar la acción de editar el usuario con el ID proporcionado
    console.log('Editar usuario con ID:', userId);
  };

  const handleDelete = (userId) => {
    // Lógica para manejar la acción de borrar el usuario con el ID proporcionado
    console.log('Borrar usuario con ID:', userId);
  };


  return (
    <div className="bg-transparent flex flex-col fixed top-20 mx-5 bg-gray-900 text-white rounded-lg justify-start overflow-y-auto">
      <div className=' flex justify-center gap-40 items-center mb-5'>
        <h2 className="text-[2rem] mb-2">Lista de Usuarios</h2>
        <button className='bg-blue-500 hover:bg-primary text-white text-[1.5rem] p-2 rounded-md'>
          <Link to='/admin/users/create'>Crear usuario</Link>
        </button>
      </div>
      <div className=' h-[500px] flex justify-center'>
        <table className=" table-compact text-[1.3rem]  mr-10 text-center overflow-auto">
          <thead>
            <tr >
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
          <tbody >
            {users.map((user, idx) => {
              return (
                <tr className='border-b-2' key={idx}>
                  <th>{idx + 1}</th>
                  <td className='flex justify-center items-center'><img className='rounded-full w-20 h-20' src={user.img} alt="" /></td>
                  <td>{user.name}</td>
                  {/* <td>{user.lastName}</td> */}
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className='w-[15%]'><Link to={`/admin/users/edit/${user.id}`}><button className='btn bg-primary text-white' onClick={() => handleEdit(user.id)}>Editar</button></Link></td>
                  <td><button className='btn text-white bg-red-800'>Borrar</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable