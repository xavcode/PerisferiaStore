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

// const deleteFavId = function (req, res) {
//   const { id } = req.params;
//   const character = fav.find(c=> c.id ===Number(id))
//   if(character){
//     fav = fav.filter(e=> e.id !== Number(id))
//     console.log("delete fav -> ", fav)
//     res.status(200).end(JSON.stringify(character))
//   } else {
//     res.status(400).end("este character ya no se encuentra en fav")
//   }
// };
 
// const deleteFavId = function (req, res) {
//   const { id } = req.params;
//   const character = fav.find(c => c.id === Number(id) || c.id === parseInt(id));
//   if (character) {
//     fav = fav.filter(e => e.id !== Number(id) && e.id !== parseInt(id));
//     console.log("delete fav -> ", fav);
//     res.status(200).end(JSON.stringify(character));
//   } 
//   else {
//     console.log('id delete ->', id);
//     res.status(400).end("Este personaje ya no se encuentra en favoritos");
//   }
// };

const deleteFavId = function (req, res) {
  const productId = req.body.productId;
  // Buscar el índice del producto en la lista de favoritos
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


// const deleteFavId = function (req, res) {
//   const { id } = req.params;
//   const index = fav.findIndex((c) => c.id === Number(id) || c.id === parseInt(id));
//   if (index !== -1) {
//     const character = fav[index];
//     fav.splice(index, 1);
//     console.log('delete fav -> ', fav);
//     res.status(200).json(character);
//   } else {
//     console.log('id delete ->', id);
//     res.status(400).json('Este personaje ya no se encuentra en favoritos');
//   }
// };

const getCharacterId = function (req, res) {
  const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.data)
    .then((data) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end("not found character");
    });
};

const getDetailId = function (req, res) {
  const { detailId } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((data) => data.data)
    .then((data) => {
      // console.log(data)
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
        status: data.status,
        origin: data.origin,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end("not found character");
    });
};


module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
