// const mercadopago = require('mercadopago');
// const dotenv = require('dotenv');

// dotenv.config();

// const create_Order = async (req, res) => {
//   mercadopago.configure({
//     access_token: process.env.PROD_ACCESS_TOKEN,
//   });

//   const result = await mercadopago.preferences.create({
//     items: [
//     {
//         title: 'Mouse re mouse',
//         unit_price: 3000,
//         currency_id: 'ARS', 
//         quantity: 1,
//       },
//     ],
//     back_urls: {
//          success: "http://localhost:3000/success",
//         failure: "http://localhost:3000/failure",
//         pending: "http://localhost:3000/pending",
//     },
//     notification_url: "https://f3b9-190-183-193-182.sa.ngrok.io/webhook"
//   });

//   console.log(result);
//   res.send(res.body);
//   };


// const receive_Webhook = async (req, res) => {
//     const payment = req.query;

//     try {
//         if (payment.type === "payment") {
//             const data = await mercadopago.payment.findById(payment["data.id"]);
//             console.log(data);
//            // guardar en base de datos
//         }
//         res.sendStatus(204);
//     } catch(error){
//         console.log(error);
//         return res.sendStatus(500).json({error: error.message});
//     }
// }
//   module.exports = {
//     receive_Webhook,
//     create_Order
// };

//https://f3b9-190-183-193-182.sa.ngrok.io/webhook

//********************************************************************************* */

// const mercadopago = require('mercadopago');
// const dotenv = require('dotenv');

// dotenv.config();

// const { Products } = require('../../db.js');

// const create_Order = async (req, res) => {
//   try {
//     mercadopago.configure({
//       access_token: process.env.PROD_ACCESS_TOKEN,
//     });

//     const productos = await Products.findAll(); // Obtén todos los productos de la base de datos

//     const items = productos.map((producto) => {
    
//       return {
//         title: producto.name,
//         unit_price: parseFloat(producto.price),
//         currency_id: 'ARS',
//         quantity: 1,
//         picture_url: producto.img, // Agrega la URL de la imagen del producto
//       };
//     });

//     const preference = {
//       items: items,
//       back_urls: {
//         success: 'http://localhost:5173/store',
//         failure: 'http://localhost:5173/store',
//         pending: 'http://localhost:3000/pending',
//       },
//       notification_url: 'https://f3b9-190-183-193-182.sa.ngrok.io/webhook',
//     };

//     const { body: preferenceResponse } = await mercadopago.preferences.create(preference);
//     const preferenceId = preferenceResponse.id;

//     console.log(preferenceResponse);
//     res.send(preferenceResponse);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// const receive_Webhook = async (req, res) => {
//   const payment = req.query;

//   try {
//     if (payment.type === 'payment') {
//       const data = await mercadopago.payment.findById(payment['data.id']);
//       console.log(data);
//       // guardar en base de datos
//     }
//     res.sendStatus(204);
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   create_Order,
//   receive_Webhook,
// };

//********************************************************************************* */

const mercadopago = require('mercadopago');
const dotenv = require('dotenv');

dotenv.config();

const { Order, Carrito, Products } = require('../../db.js');

const create_Order = async (req, res) => {
  try {
    mercadopago.configure({
      access_token: process.env.PROD_ACCESS_TOKEN,
    });

    const { cartId } = req.body; // Obtén el ID del carrito desde el cuerpo de la solicitud

    const carrito = await Carrito.findByPk(cartId, {
      include: [{ model: Products, as: 'Products' }], // Incluye los productos asociados al carrito
    });

    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const items = carrito.Products.map((producto) => {
      return {
        title: producto.name,
        unit_price: parseFloat(producto.price),
        currency_id: 'ARS',
        quantity: producto.Carrito.quantity, // Utiliza la cantidad del producto en el carrito
        picture_url: producto.img, // Agrega la URL de la imagen del producto
      };
    });

    const preference = {
      items: items,
      back_urls: {
        success: 'http://localhost:5173/store',
        failure: 'http://localhost:5173/store',
        pending: 'http://localhost:3000/pending',
      },
      notification_url: 'https://f3b9-190-183-193-182.sa.ngrok.io/webhook',
    };

    const { body: preferenceResponse } = await mercadopago.preferences.create(preference);
    const preferenceId = preferenceResponse.id;

    console.log(preferenceResponse);
    res.send(preferenceResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const receive_Webhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log(data);
      // guardar en base de datos
      await Order.create({
        quantity: data.quantity,
        totalPrice: data.total_amount,
        name: data.name,
        img: data.picture_url,
      });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};

module.exports = {
  create_Order,
  receive_Webhook,
};