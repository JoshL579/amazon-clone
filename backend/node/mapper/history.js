const { PrismaClient, Prisma } = require('@prisma/client')
const { encryptPassword } = require('../util/sha256')

const prisma = new PrismaClient()

const createHistory = (userId, ProductId) => {
  return prisma.user
    .create({
      data: {
        userId: userId,
        productId: ProductId,
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return null
    })
}

const findHistoryById = (id) => {
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

const historyDbHandler = {
    createHistory: createHistory,
    findHistoryById: findHistoryById
}

module.exports = historyDbHandler