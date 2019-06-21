const user = require('../services/user.service');
const bcrypt = require('bcryptjs');

// rewrite this func
getAll = async (req, res, next) => {
    user.getAll()
        .then(users => {
            return res.json(users)
        })
        .catch(error => {
            next(error)
        })
}

// rewrite this func
const getOne = async (req, res, next) => {
    user.getOne(req.user)
        .then(user => {
            return res.json(user)
        })
        .catch(error => {
            next(error)
        })
}



module.exports = {
    getAll,
    getOne
}