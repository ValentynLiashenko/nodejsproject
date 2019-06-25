const { Product } = require('../models/');

const getAll = () => {
    return Product.findAll()
}

const getOne = (id) => {
    return Product.findOne({
        where: {
            id
        }
    })
}

const create = (data, userId) => {
    return Product.create({
        title: data.title,
        price: data.price,
        description: data.description,
        quantity: data.quantity,
        userId: userId
    })
}

const deleteOne = (id) => {
    return Product.destroy({
        where: {
            id
        }
    })
}

const updateOne = (data) => {
    return Product.update({
        title: data.title,
        price: data.price,
        description: data.description,
        quantity: data.quantity
    }, 
    {
        where: {
            id: data.id
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