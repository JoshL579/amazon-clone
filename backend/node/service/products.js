const productDbHandler = require("../mapper/products");
const categoryDbHandler = require("../mapper/categories");
const imageDbHandler = require("../mapper/images");
const historyDbHandler = require("../mapper/history");

const homeProducts = async (req, res, next) => {
  const userId = req.params.uid||2
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

  const history = await historyDbHandler.findHistoryById(userId)

  return res.json({
    products: products,
    categories: categories,
    heros: heros,
    cards: cards,
    history: history
  });
};

const singleProduct = async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.params.uid
  const product = await productDbHandler.findProductById(productId);
  // create a history in table history
  await historyDbHandler.createHistory(userId, productId)

  return res.json({
    product: product,
  });
};

const productService = {
  homeProducts: homeProducts,
  singleProduct: singleProduct,
};

module.exports = productService;
