const productDbHandler = require('../mapper/products')
const categoryDbHandler = require('../mapper/categories')

const homeProducts = async (req, res, next) => {
    const allCategories = await categoryDbHandler.findAllCategoryIds()

    // empty categories
    if (!allCategories) return res.json({ status: 404 })

    let categories = []
    allCategories.forEach(category => {
        categories.push(category.id)
    })

    const products = await productDbHandler.findAllProducts(categories, 10)

    //[TODO]: get hero pics
    //[TODO]: get catagory thumbnail

    return res.json({ products: products })
}

const productService = {
    homeProducts: homeProducts,
}

module.exports = productService
