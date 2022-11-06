const productDbHandler = require("../mapper/products");
const categoryDbHandler = require("../mapper/categories");
const imageDbHandler = require("../mapper/images");
const historyDbHandler = require("../mapper/history");

const homeProducts = async (req, res, next) => {
  const userId = req.cookies.uid;
  const allCategories = await categoryDbHandler.findAllCategories();
  console.log(allCategories);
  // empty categories
  if (!allCategories) return res.json({ status: 404 });

  let categories = {};
  allCategories.forEach((category) => {
    categories[category.id] = category.catagory;
  });

  const dbProducts = await productDbHandler.findProductsByCategory(10);
  let products = {};
  dbProducts.forEach((category) => {
    if (category.Products.length === 0) return;
    products[category.Products[0].categoryId] = category.Products;
  });

  const images = await imageDbHandler.findAllHomeImages();
  let heros = [],
    cards = [];
  images.forEach((image) => {
    if (image.subType === "hero") {
      heros.push(image);
    }
    if (image.subType === "card") {
      cards.push(image);
    }
  });

  let historyProducts;
  if (userId) {
    const histories = await historyDbHandler.findHistoryById(userId);
    let pids = [];
    histories.forEach((history, i) => {
      if (i > 9) return;
      pids.push(history.productId);
    });
    historyProducts = await productDbHandler.findProductsByIds(pids);
  }

  return res.json({
    products: products,
    categories: categories,
    heros: heros,
    cards: cards,
    history: historyProducts ?? [],
  });
};

const singleProduct = async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.cookies.uid;
  console.log("uid", userId);
  const product = await productDbHandler.findProductById(productId);

  // create a history in table history
  // check if history exist
  const isExist = await historyDbHandler.findHistoryByUidAndPid(
    userId,
    productId
  );
  if (!isExist) await historyDbHandler.createHistory(userId, productId);

  return res.json({
    product: product,
  });
};

const getAllProducts = async (req, res, next) => {
  const keywords = req.query.keywords;
  console.log(keywords)
  const dbProducts = await productDbHandler.findProductsByName(keywords);
  let products = dbProducts;

  // console.log(products);

  return res.json({
    products: products,
  });
};

const productService = {
  homeProducts: homeProducts,
  singleProduct: singleProduct,
  getAllProducts: getAllProducts,
};

module.exports = productService;
