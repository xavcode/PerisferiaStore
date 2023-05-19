const { Router } = require("express");
const { createProduct } = require("../controllers/createProd");
const {createRecordProduct, getAllProducts } = require("../controllers/productControllers");
const router_Post = require("./posts");
const router_get = require("./gets");
const router = Router();


router.use('/', (req, res, next) => {
    switch (req.method) {
        case 'GET':
            return router_get(req, res, next);
        case 'POST':
            return router_Post(req, res, next);
        case 'DELETE':
            return router_delete(req, res, next);
        default: 
            return res.status(405).send('Metodo no permitido')
}
})

// router.get("/", createRecordProduct)
// router.get("/store", getAllProducts)
// router.post("/product", createProduct);
// router.use("/favorite", routeFavorite);
// router.use("/order", routeOrder);
// router.use("/user", (req, res) => {
//     res.status(200).send('<h1>Ahi encontre el error</h1>')
// });
module.exports = router;
