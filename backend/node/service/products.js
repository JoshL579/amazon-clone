const productDbHandler = require('../mapper/products')
const categoryDbHandler = require('../mapper/categories')
const imageDbHandler = require('../mapper/images')

const homeProducts = async (req, res, next) => {
    const allCategories = await categoryDbHandler.findAllCategories()

    // empty categories
    if (!allCategories) return res.json({ status: 404 })

    let categoryIds = [], categories = {}
    allCategories.forEach(category => {
        categoryIds.push(category.id)
        categories[category.id] = category.catagory
    })
    const products = await productDbHandler.findAllProducts(categoryIds, 20)

    const images = await imageDbHandler.findAllHomeImages()
    let heros = [], cards = []
    images.forEach(image => {
        if (image.subType === 'hero') {
            heros.push(image)
        }
        if (image.subType === 'card') {
            cards.push(image)
        }
    })

    return res.json({
        products: products,
        categories: categories,
        heros: heros,
        cards: cards,
    })
}

const productService = {
    homeProducts: homeProducts,
}

module.exports = productService
