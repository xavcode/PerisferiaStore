const mercadopago = require('mercadopago');
const { Order } = require('../../db');

mercadopago.configure({
  access_token: process.env.PROD_ACCESS_TOKEN,
});

const createPreference = async (orderIds) => {
  const orders = await Promise.all(orderIds.map((orderId) => Order.findByOrderId(orderId)));

  const items = orders.map((order) => ({
    title: order.name,
    unit_price: order.price,
    quantity: order.quantity,
  }));

  const preference = {
    items: items,
    back_urls: {
      success: 'https:///store',
      failure: 'https://www.tu-tienda.com/error',
      pending: 'https://www.tu-tienda.com/pending',
    },
    auto_return: 'approved',
  };

  const response = await mercadopago.preferences.create(preference);
  return response.body.id;
};

module.exports = {
  createPreference,
};