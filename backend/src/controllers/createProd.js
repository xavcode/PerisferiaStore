const { Products } = require('../db');
const fs = require('fs')
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
    'https://kqrineeftgipvsisbads.supabase.co/storage/v1/object/public',
    'CesarGabriel@291194');

const subirImagen = async (req, res) => {
    try {
        const {image} = req.body;
        const { data, error } = await supabase
            .storage
            .from('image')
            .upload('image' , image)
        if (error) {
            throw new Error('Error al subir la imagen a Supabase');
        } else {
            res.status(200).json('exito')
        }
    } catch (error) {
        res.status(500).send({error: error.message})
    } 
}  

const createProduct = (prod) => {
    try {
        const my_product = Products.create(prod)
        return my_product
    } catch (error) {
        return {
           error: error.message
       };
    }
}

const add_NewProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      status,
      description,
      rating,
      category,
    } = req.body;
    const imageFile = req.file;
    const { data, error } = await supabase.storage
      .from('image')
      .upload('image', imageFile);

    if (error) {
      throw new Error('Error al subir la imagen a Supabase');
    }
      const imageUrl = await response.data.publicURL;
      console.log(imageUrl)

    const new_product = await createProduct({
      id,
      name,
      price,
      img: imageUrl, // Utiliza la URL de la imagen en lugar del nombre del archivo
      status,
      description,
      rating,
      category,
    });

    res.status(200).json({ success: true, product: new_product }).send(imageUrl);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  add_NewProduct,
    createProduct,
  subirImagen
}