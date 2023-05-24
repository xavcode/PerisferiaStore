const { Router } = require('express');
const { createProduct } = require('../controllers/createProd');
const { create_record_user } = require('../controllers/createUser');
const { addNewFavorite } = require('../controllers/addFavorites');
const { creation_relation } = require('../controllers/addOrders');
const fs = require('fs')
const router_Post = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });// Directorio donde se guardarán los archivos subidos
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
    'https://kqrineeftgipvsisbads.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcmluZWVmdGdpcHZzaXNiYWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDExOTQsImV4cCI6MTk5OTY3NzE5NH0.EIvFrcxlsy-n6OjQm9SEvU-JrtcR05JT6sNaWp_sQAQ');


// Ruta POST para recibir el archivo adjunto
router_Post.post('/', upload.single('file'), async (req, res) => {
    
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
        await fs.promises.unlink(req.file.path.toString());
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
});


router_Post.post('/user', create_record_user);
router_Post.post('/user/favorites', addNewFavorite);
router_Post.post('/order', creation_relation);
// router_Post.post('/login', authController);


module.exports = router_Post;

/**
 * especificar los rangos (tenerlos mas explicitos)
 * aplicar ordenamiento
 * aplicar formulario
 * autentificaciones
 * notificaciones
 */