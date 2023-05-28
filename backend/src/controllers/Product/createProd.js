const { Products } = require('../../db');
const { STORAGE_KEY, DB_URL } = process.env;
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });// Directorio donde se guardarán los archivos subidos
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(`${DB_URL}`, `${STORAGE_KEY}`);

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
    } = req.body
    // Lee el contenido del archivo en un búfer
    const fileData = await fs.promises.readFile(req.file.path.toString());
      const { data, error } = await supabase.storage.from('image').upload(`${req.file.originalname}`, fileData);
      
      // Verifica si hubo un error al guardar el archivo
      if (error) {
          throw new Error(`Error al guardar el archivo en Supabase: ${error.message}`);
    }
    await fs.promises.unlink(req.file.path.toString()); //eliminamos el archivo del sistema de archivos
    
    let imageUrl = await supabase.storage.from('image').getPublicUrl(`${req.file.originalname}`);
    
    console.log(imageUrl.data.publicUrl)
    let imagenDB = imageUrl.data.publicUrl.toString();
    
    const new_product = await createProduct({
      name,
      price,
      img: imagenDB, // Utiliza la URL de la imagen en lugar del nombre del archivo
      status,
      description,
      rating,
      category,
        });
        delete req.file
        res.json({ message: 'Archivo recibido y guardado en Supabase con éxito' });
    } catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
}
}

module.exports = {
  add_NewProduct,
    createProduct
}