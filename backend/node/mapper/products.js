const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findProductsByCategory = (limit) => {
  return prisma.category
    .findMany({
      select: {
        Products: {
          take: limit
        }
      }
    })
    .then((products) => {
      return products;
    })
    .catch((err) => {
      return null;
    });
};

const findProductById = (id) => {
  return prisma.products
    .findUnique({
      where: {
        id: parseInt(id)
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
  findProductsByCategory: findProductsByCategory,
  findProductById: findProductById,
};

module.exports = productDbHandler;
