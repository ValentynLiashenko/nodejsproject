const { Product } = require('../models/')
const getAll = () => {
    return Product.findAll()
}

const getOne = (id) => {
    return Product.findOne({
        where: {
            id: id
        }
    })
}

const create = (title, price, description, quantity, category, userId) => {
    return Product.create({
        title: title,
        price: price,
        description: description,
        quantity: quantity,
        category: category,
        userId: userId
    })
}

const deleteOne = (id) => {
    return Product.destroy({
        where: {
            id: id
        }
    })
}

const updateOne = (id, title=null, price=null, description=null, quantity=null, category=null) => {
    return Product.update({
        title: title,
        price: price,
        description: description,
        quantity: quantity,
        category: category
    }, 
    {
        where: {
            id:id
        }
    })
}


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}