const { PrismaClient, Prisma } = require('@prisma/client')
const { encryptPassword } = require('../util/sha256')

const prisma = new PrismaClient()

const createHistory = (userId, productId) => {
  console.log('Creating', userId)
  return prisma.history
    .create({
      data: {
        ...userId.length === 16
          ? { tempUserId: userId }
          : { userId: parseInt(userId, 10) },
        productId: parseInt(productId, 10),
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.error(err)
      return null
    })
}

const findHistoryByUidAndPid = (userId, productId) => {
  return prisma.history
    .findFirst({
      where: {
        AND: {
          ...userId.length === 16
            ? { tempUserId: userId }
            : { userId: parseInt(userId, 10) },
          productId: parseInt(productId, 10),
        },
      }
    })
    .then((product) => {
      console.log(product)
      return product;
    })
    .catch((err) => {
      console.error(err)
      return null;
    });
}

const findHistoryById = (userId) => {
  console.log(userId.length)
  return prisma.history
    .findMany({
      where: {
        ...userId.length === 16
          ? { tempUserId: userId }
          : { userId: parseInt(userId, 10) }
      },
    })
    .then((product) => {
      console.log(product)
      return product;
    })
    .catch((err) => {
      console.error(err)
      return null;
    });
};

const historyDbHandler = {
  createHistory: createHistory,
  findHistoryById: findHistoryById,
  findHistoryByUidAndPid: findHistoryByUidAndPid
}

module.exports = historyDbHandler