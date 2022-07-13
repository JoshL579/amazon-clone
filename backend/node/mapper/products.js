const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const findAllProducts = (categories, limit) => {
    return prisma.products
        .findMany({
            take: limit,
            where: {
                categoryId: {
                    in: categories
                }
            }
        })
        .then((user) => {
            return user
        })
        .catch((err) => {
            return null
        })
}

const productDbHandler = {
    findAllProducts: findAllProducts,
}

module.exports = productDbHandler