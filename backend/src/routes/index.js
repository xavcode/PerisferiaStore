const { Router } = require("express");
const routeFavorite = require("../routes/othersRoutes/routeFavorite");
const routeOrder = require("../routes/othersRoutes/routeOrder");
const {} = require("../routes/othersRoutes/routeProduct");
const routeUser = require("../routes/othersRoutes/routeUser");
const { add_NewProduct, createProduct } = require("../controllers/createProd");
const router = Router();

<<<<<<< HEAD


router.post("/product", createProduct);
// router.use("/favorite", routeFavorite);
// router.use("/order", routeOrder);
// router.use("/user", (req, res) => {
//     res.status(200).send('<h1>Ahi encontre el error</h1>')
// });
=======
// router.use("/favorite", routeFavorite);
// router.use("/order", routeOrder);
router.use("/product", routeProduct);
// router.use("/user", routeUser);
>>>>>>> 91c753fb8196ee7ba37dffc0a8327e539808c018

module.exports = router;
