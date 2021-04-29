const router = require("express").Router();

// @ get all products
router.get("/", require("../controllers/productCtrl").getAllProducts);

// @ get a product by ID
router.get("/:id", require("../controllers/productCtrl").getProductById);

// @ post all product
// router.post("/");

module.exports = router;
