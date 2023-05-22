// const multer = require('multer');

// // Configura el almacenamiento de multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'D:\programacion\CarpetaPF\nuevo_projct_ecommer\PerisferiaStore\backend\imagenes'); // Ruta de la carpeta donde se guardarán las imágenes
//   },
//   filename: (req, file, cb) => {
//     // Genera un nombre único para el archivo
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const extension = file.originalname.split('.').pop(); // Obtiene la extensión del archivo
//     cb(null, uniqueSuffix + '.' + extension); // Nombre final del archivo
//   }
// });

// // Filtra los archivos permitidos
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true); // Acepta el archivo
//   } else {
//     cb(new Error('El archivo no es una imagen válida.'), false); // Rechaza el archivo
//   }
// };

// // Configura las opciones de multer
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5 // Tamaño máximo del archivo en bytes (en este caso, 5MB)
//   },
//   fileFilter: fileFilter
// });

// module.exports = upload;
