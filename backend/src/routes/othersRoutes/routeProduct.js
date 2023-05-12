const { Router } = require("express");
const { createProduct } = require("../../controllers/productControllers")

const router = Router();

router.post("/", createProduct);

module.exports = router;