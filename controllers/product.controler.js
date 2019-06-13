const product = require('../services/product.service')

const getAll = async (req, res, next) => {
    product.getAll()
        .then(products => {
            return res.json(products)
        })
        .catch(error => {
            next(error)
        })
}

const getOne = async (req, res, next) => {
    product.getOne(req.params.id)
        .then(product => {
            return res.json(product)
        })
        .catch(error => {
            next(error)
        })
}

const create = async (req, res, next) => {
    let { title, price, description, quantity, userId} = req.body
    product.create(title, price, description, quantity, userId)
        .then(product => {
            return res.json(product)
        })
        .catch(error => {
            next(error)
        })
}

const deleteOne = async (req, res, next) => {
    product.deleteOne(req.params.id)
        .then(product => {
            return res.send(status=204)
        })
        .catch(error => {
            next(error)
        })
}

const updateOne = async (req, res, next) => {
    let { id, title, price, description, quantity} = req.body
    product.updateOne(id, title, price, description, quantity)
        .then(product => {
            return res.json(product)
        })
        .catch(error => {
            next(error)
        })   
}


module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne,
    updateOne
}