const { Router } = require("express");

const routeFavorite = require("../routes/othersRoutes/routeFavorite");
const routeOrder = require("../routes/othersRoutes/routeOrder");
const routeProduct = require("../routes/othersRoutes/routeProduct");
const routeUser = require("../routes/othersRoutes/routeUser");

const router = Router();

router.use("/favorite", routeFavorite);
router.use("/order", routeOrder);
router.use("/product", routeProduct);
router.use("/user", routeUser);

module.exports = router;
