const axios = require("axios");
var fav = []

const getFav = function (req, res) {
  res.status(200).end(JSON.stringify(fav))
};
const postFav = function (req, res) {
  fav.push(req.body)
  console.log("post fav -> ", fav)
  res.status(200).end(JSON.stringify(req.body)) 
};

const deleteFavId = function (req, res) {
  const productId = req.body.productId;
  const index = fav.findIndex(item => item.productId === productId);
  
  if (index !== -1) {
    // Eliminar el producto de la lista de favoritos
    fav.splice(index, 1);
    console.log("delete fav -> ", fav);
    res.status(200).end(JSON.stringify({ success: true }));
  } else {
    res.status(404).end(JSON.stringify({ success: false, message: "Producto no encontrado en favoritos" }));
  }
};

module.exports = {
  getFav,
  postFav,
  deleteFavId,
};
