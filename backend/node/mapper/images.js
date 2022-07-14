const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const findAllHomeImages = () => {
    return prisma.images
        .findMany({
            where: {
                type: 'home'
            }
        })
        .then((images) => {
            return images
        })
        .catch((err) => {
            return null
        })
}

const imageDbHandler = {
    findAllHomeImages: findAllHomeImages,
}

module.exports = imageDbHandler