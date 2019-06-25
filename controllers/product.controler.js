const Product = require('../services/product.service');


const getAll = async (req, res, next) => {
    try {
        return res.json(Product.getAll());
    } catch(error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        return res.json(Product.getOne(req.params.id));
    } catch(error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        return res.json(await Product.create(req.body, req.user));
    } catch(error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        return res.json(await Product.deleteOne(req.params.id));
    } catch(error) {
        next(error);
    }
}

const updateOne = async (req, res, next) => {
    try {
        return res.json(await Product.updateOne(req.body));
    } catch(error) {
        next(error);
    }
}


module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne,
    updateOne
}