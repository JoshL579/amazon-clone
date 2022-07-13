const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const findAllCategories = () => {
    return prisma.category
        .findMany()
        .then((category) => {
            return category
        })
        .catch((err) => {
            return null
        })
}

const findAllCategoryIds = () => {
    return prisma.category
        .findMany({
            select: {
                id: true
            }
        })
        .then((category) => {
            return category
        })
        .catch((err) => {
            return null
        })
}

const categoryDbHandler = {
    findAllCategories: findAllCategories,
    findAllCategoryIds: findAllCategoryIds
}

module.exports = categoryDbHandler