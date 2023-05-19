const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const createProductWithImage = async () => {
  try {
    // Crear una instancia de FormData
    const formData = new FormData();

    // Agregar los campos de texto del producto
    formData.append('name', 'Ejemplo de producto');
    formData.append('price', 9.99);
    formData.append('status', 'disponible');
    formData.append('description', 'Descripción del producto');
    formData.append('rating', 4.5);
    formData.append('category', 'Auriculares');

    // Agregar la imagen al FormData
    const imagePath = 'C:\Users\PC\Pictures\firma.jpg'; // Ruta de la imagen en tu sistema
    const imageStream = fs.createReadStream(imagePath);
    formData.append('image', imageStream);

    // Realizar la solicitud POST a la ruta correspondiente
    const response = await axios.post('http://localhost:3001/', formData, {
      headers: formData.getHeaders(), // Establecer los encabezados adecuados para multipart/form-data
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

createProductWithImage();
