import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
    const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    username: '',
    address: '',
    password: '',
    mail: '',
    phone: '',
  });
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: selectedFile,
      previewImage: URL.createObjectURL(selectedFile),
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { file, ...data } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append('file', file);
    Object.entries(data).forEach(([key, value]) => {
      formDataToSend.append(key, value);
      console.log(formDataToSend)
    });
    try {
      const response = await axios.post('https://perisferiastore-production.up.railway.app/user', formDataToSend);
      console.log('Respuesta del servidor:', response.data);
      alert('Producto creado con éxito');
      // Hacer cualquier otra acción deseada después de enviar el formulario
      navigate('/admin/users'); // Ejemplo: redireccionar a la página de productos del administrador
    } catch (error) {
      console.error('Error:', error);
      // Manejar el error de envío de formulario como se desee
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-4/5 px-6">
        <h2 className="text-2xl font-bold mb-4">Crear Usuario</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-semibold">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block font-semibold">
              Apellido:
            </label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="username" className="block font-semibold">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="address" className="block font-semibold">
              Dirección:
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="mail" className="block font-semibold">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-200 text-gray-800 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="file" className="font-semibold">
              Archivo:
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Seleccionar Archivo
              </button>
              {formData.previewImage && (
                <img
                  src={formData.previewImage}
                  alt="Preview"
                  className="ml-4 h-20 w-20 object-cover rounded"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="col-span-1  btn btn-outline btn-success"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;







// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './testCss.css';

// const MyForm = () => {
//     const [formData, setFormData] = useState({
//     file: null,
//     name: '',
//     last_name: '',
//     username: '',
//     address: '',
//     password: '',
//     mail: '',
//     phone: '',
//     isAdmin: 'unchecked',
//   });
//   const navigate = useNavigate();
//   const fileInputRef = useRef();

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       file: selectedFile,
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//      const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', newProduct.name);
//     formData.append('price', newProduct.price);
//     formData.append('status', newProduct.status);
//     formData.append('description', newProduct.description);
//     formData.append('rating', newProduct.rating);
//     formData.append('category', newProduct.category);
//       console.log(formDataToSend)

//     // try {
//     //   const response = await axios.post('https://perisferiastore-production.up.railway.app/user', formDataToSend);
//     //   console.log('Respuesta del servidor:', response.data);
//     //   alert('Formulario enviado con éxito');
//     //   // Hacer cualquier otra acción deseada después de enviar el formulario
//     //   navigate('/'); // Ejemplo: redireccionar a la página principal
//     // } catch (error) {
//     //   console.error('Error:', error);
//     //   // Manejar el error de envío de formulario como se desee
//     // }
//   };

//     return (
//       <div className='test'>
//       <div className='box_test'>
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Username:
//         <input type="text" name="username" value={formData.username} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Address:
//         <input type="text" name="address" value={formData.address} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Mail:
//         <input type="email" name="mail" value={formData.mail} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Phone:
//         <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Is Admin:
//         <input type="checkbox" name="isAdmin" checked={formData.isAdmin === 'checked'} onChange={handleChange} />
//       </label>
//       <br />
//       <input type="file" ref={fileInputRef} onChange={handleFileChange} />
//       <br />
//       <button type="submit">Enviar</button>
//                 </form>
//             </div>
//         </div>
        
//   );
// };

// export default MyForm;
