const { Router } = require("express");
const routeFavorite = require("../routes/othersRoutes/routeFavorite");
const routeOrder = require("../routes/othersRoutes/routeOrder");
const {} = require("../routes/othersRoutes/routeProduct");
const routeUser = require("../routes/othersRoutes/routeUser");
const { add_NewProduct, createProduct } = require("../controllers/createProd");
const router = Router();



router.post("/product", createProduct);
// router.use("/favorite", routeFavorite);
// router.use("/order", routeOrder);
// router.use("/user", (req, res) => {
//     res.status(200).send('<h1>Ahi encontre el error</h1>')
// });

module.exports = router;
