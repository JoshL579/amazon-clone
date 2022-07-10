const { PrismaClient, Prisma } = require('@prisma/client')
const { encryptPassword } = require('../util/sha256')

const prisma = new PrismaClient()

const createUser = (user) => {
  return prisma.user
    .create({
      data: {
        name: user.name,
        email: user.email,
        password: encryptPassword(user.password).passwordHash,
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return null
    })
}

const findUserByEmail = (email) => {
  return prisma.user
    .findUnique({
      where: { email: email },
    })
    .then((user) => {
      return user
    })
    .catch((err) => {
      return null
    })
}

const userDbHandler = {
  createUser: createUser,
  findUserByEmail: findUserByEmail,
}

module.exports = { userDbHandler }
