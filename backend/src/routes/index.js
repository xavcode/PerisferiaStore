const { Router } = require("express");
const routeFavorites = require("./routeFavorites");
const routeOrders = require("./routeOrder");
const routeUsers = require("./routeUsers");
const routeProducts = require ('./routeProducts')
const router = Router();

router.use('/products', routeProducts)

// router.post("/product", createProduct);
// router.use("/favorite", routeFavorite);
// router.use("/order", routeOrder);
// router.use("/user", (req, res) => {
//     res.status(200).send('<h1>Ahi encontre el error</h1>')
// });
module.exports = router;
