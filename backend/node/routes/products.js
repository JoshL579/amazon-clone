var express = require("express");
var router = express.Router();
const productService = require("../service/products");

/* get home products */
router.get("/home", async (req, res, next) => {
  return productService.homeProducts(req, res, next);
});

router.get("/home/:id", async (req, res, next) => {
  return productService.singleProduct(req, res, next);
});

module.exports = router;
