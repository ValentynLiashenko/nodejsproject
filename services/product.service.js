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

const create = (title, price, description, quantity, userId) => {
    return Product.create({
        title: title,
        price: price,
        description: description,
        quantity: quantity,
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

const updateOne = (id, title=null, price=null, description=null, quantity=null) => {
    return Product.update({
        title: title,
        price: price,
        description: description,
        quantity: quantity
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