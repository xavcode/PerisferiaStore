const { Router } = require("express");
const { createProduct } = require("../controllers/createProd");
const {createRecordProduct, getAllProducts } = require("../controllers/productControllers");
const router = Router();



router.post("/product", createProduct);
router.get("/", createRecordProduct)
router.get("/store", getAllProducts)
// router.use("/favorite", routeFavorite);
// router.use("/order", routeOrder);
// router.use("/user", (req, res) => {
//     res.status(200).send('<h1>Ahi encontre el error</h1>')
// });

module.exports = router;
