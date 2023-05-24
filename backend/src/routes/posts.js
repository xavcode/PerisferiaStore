const { Router } = require('express');
const { add_NewProduct } = require('../controllers/createProd');
const { create_record_user } = require('../controllers/createUser');
const { addNewFavorite } = require('../controllers/addFavorites');
const { creation_relation } = require('../controllers/addOrders');
const { createClient } = require('@supabase/supabase-js');
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

// const supabase = createClient('https://kqrineeftgipvsisbads.supabase.co',
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcmluZWVmdGdpcHZzaXNiYWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDExOTQsImV4cCI6MTk5OTY3NzE5NH0.EIvFrcxlsy-n6OjQm9SEvU-JrtcR05JT6sNaWp_sQAQ');
 

const router_Post = Router();

// router_Post.post('/', upload.single('file'), async function (req, res) {
//     const imagen = req.files;
//     await supabase.storage.from('image').upload('image', imagen)
//     res.status(200).send('mando con exito')
// });
const multer = require('multer');

// Configurar la carpeta de almacenamiento para los archivos adjuntos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// Configurar el middleware de Multer para procesar la carga de archivos
const upload = multer({ storage: storage });

// Ruta para manejar el formulario
router_Post.post('/upload', upload.single('image'), (req, res) => {
  // Acceder al archivo adjunto a través de req.file
  if (req.file) {
    console.log('Archivo recibido:', req.file);
    // Realizar acciones adicionales con el archivo adjunto, como guardarlo en una base de datos o procesarlo de alguna manera.
  }
  res.send('Archivo recibido correctamente.');
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