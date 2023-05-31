import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from '../../../assets/images/profile-default-image.png'
import Swal from 'sweetalert2';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios('http://localhost:3001/userAct'); //https://perisferiastore-production.up.railway.app/users
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    // Lógica para manejar la acción de editar el usuario con el ID proporcionado
    // console.log('Editar usuario con ID:', userId);
  };

  const handleDelete = (userId) => {
    // Lógica para manejar la acción de borrar el usuario con el ID proporcionado
    Swal.fire({
      title: '¿Seguro que quieres eliminar el usuario?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      reverseButtons: true,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para borrar el usuario con el ID proporcionado
        console.log('Borrar usuario con ID:', userId);
      }
    });
  };


  return (
    <div className=" bg-transparent w-full flex flex-col fixed top-20 left-20 bg-gray-900 text-white rounded-lg justify-end overflow-y-auto">
      <div className=' flex gap-40 justify-center items-center mb-5'>
        <h2 className="text-[2rem] mb-2">Lista de Usuarios</h2>
        <Link to='/admin/users/create'>
          <button className='btn btn-outline btn-success'>
            Crear usuario
          </button>
        </Link>
      </div>
      <div className=' h-[500px]  m-auto justify-center'>
        <table className="  text-[1.3rem] mr-10 text-center">
          <thead>
            <tr className='border-b-2'>
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
                <tr className='max-h-[150px]' key={idx} >
                  <th>{idx + 1}</th>
                  <td className='w-[150px] h-[150px] flex justify-center items-center '><img className='rounded-full w-20 h-20' src={user.img} alt="" /></td>
                  <td>{user.name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.username}</td>
                  <td>{user.mail}</td>
                  <td className='w-[15%]'><Link to={`/admin/users/edit/${user.id}`}><button className='btn btn-outline btn-warning' onClick={() => handleEdit(user.id)}>Editar</button></Link></td>
                  <td><button className='btn btn-outline btn-error' onClick={handleDelete}>Borrar</button></td>
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