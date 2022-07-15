const productDbHandler = require("../mapper/products");
const categoryDbHandler = require("../mapper/categories");
const imageDbHandler = require("../mapper/images");

const homeProducts = async (req, res, next) => {
  const allCategories = await categoryDbHandler.findAllCategories();

  // empty categories
  if (!allCategories) return res.json({ status: 404 });

  let categories = {};
  allCategories.forEach((category) => {
    categories[category.id] = category.catagory;
  });

  const dbProducts = await productDbHandler.findProductsByCategory(10);
  let products = {}
  dbProducts.forEach((category) => {
    if (category.Products.length === 0) return
    products[category.Products[0].categoryId] = category.Products
  })

  const images = await imageDbHandler.findAllHomeImages();
  let heros = [], cards = [];
  images.forEach((image) => {
    if (image.subType === "hero") {
      heros.push(image);
    }
    if (image.subType === "card") {
      cards.push(image);
    }
  });

  return res.json({
    products: products,
    categories: categories,
    heros: heros,
    cards: cards,
  });
};

const singleProduct = async (req, res, next) => {
  const id = req.params.id;
  const product = await productDbHandler.findProductById(id);
  return res.json({
    product: product,
  });
};

const productService = {
  homeProducts: homeProducts,
  singleProduct: singleProduct,
};

module.exports = productService;
