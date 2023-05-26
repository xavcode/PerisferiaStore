const { Router } = require('express');
const { createProduct, add_NewProduct } = require('../controllers/Product/createProd');
const { create_record_user } = require('../controllers/Users/createUser');
const { addNewFavorite } = require('../controllers/Favorites/addFavorites');
const { creation_relation } = require('../controllers/Orders/addOrders');
const fs = require('fs')
const router_Post = Router();
const multer = require('multer');
const { addProductCarrito } = require('../controllers/Carrito/addCarrito');
const upload = multer({ dest: 'uploads/' });// Directorio donde se guardarán los archivos subidos

// Ruta POST para recibir el archivo adjunto
router_Post.post('/', upload.single('file'), add_NewProduct);
router_Post.post('/user', upload.single('file'), create_record_user);
router_Post.post('/user/favorites', addNewFavorite);
router_Post.post('/store', addProductCarrito)
router_Post.post('/order', creation_relation);


// router_Post.post('/login', authController);

//******************************************************************/
//ruta de la pasarela de pagos.

router_Post.post('/payment', async (req, res) => {
    try {
        const productIds = req.body.productIds;

      //preferencia de pago
    const preferenceId = await mercadoPagoVendedorController.createPreference(productIds);

      // Redirige al usuario a la página de pago de Mercado Pago
    const redirectUrl = `https://www.mercadopago.com/checkout?preference_id=${preferenceId}`;
    res.redirect(redirectUrl);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar el proceso de pago' });
    }
});


module.exports = router_Post;

/**
 * especificar los rangos (tenerlos mas explicitos)
 * aplicar ordenamiento
 * aplicar formulario
 * autentificaciones
 * notificaciones
 */