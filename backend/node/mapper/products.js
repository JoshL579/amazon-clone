const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAllProducts = (categories, limit) => {
  return prisma.products
    .findMany({
      take: limit,
      where: {
        categoryId: {
          in: categories,
        },
      },
    })
    .then((products) => {
      return products;
    })
    .catch((err) => {
      return null;
    });
};

const fingSingleProduct = (id) => {
  return prisma.products
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((product) => {
      return product;
    })
    .catch((err) => {
      return null;
    });
};

const productDbHandler = {
  findAllProducts: findAllProducts,
  fingSingleProduct: fingSingleProduct,
};

module.exports = productDbHandler;
