import React, { useState } from 'react';
import './formcss.css'
import axios from 'axios';

const CreateProductForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('category', category);

    try {
      await axios.post('http://localhost:3001/', formData);
      // El formulario se envió exitosamente
      // Realiza cualquier acción adicional que necesites aquí
    } catch (error) {
      console.error(error);
      // Handle error: Mostrar mensaje de error o tomar otra acción
    }
  };

  return (
    <div className='formstyle'>
//      <div className='formDos'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="file">Archivo:</label>
      <input type="file" id="file" onChange={handleFileChange} />

      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="price">Precio:</label>
      <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label htmlFor="status">Estado:</label>
      <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />

      <label htmlFor="description">Descripción:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="rating">Calificación:</label>
      <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />

      <label htmlFor="category">Categoría:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button type="submit">Enviar</button>
        </form>
      </div>
      </div>
  );
};

export default CreateProductForm;






// import './formcss.css'
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateProductForm = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Crea un objeto FormData
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     // Envía la petición POST utilizando Axios
//     axios.post('http://localhost:3001/', formData)
//       .then((response) => {
//         return alert('subida con exito')
//         console.log(response.data);
//       })
//       .catch((error) => {
//         // Maneja el error en caso de que ocurra
//         console.error(error);
//       });
//   };

//   return (
//     <div className='formstyle'>
//       <div className=''>
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Enviar</button>
//         </form>
//       </div>
//       </div>
//   );
// };

// export default CreateProductForm;


