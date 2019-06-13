const { User } = require('../models/')
const passport = require('../config/passport')

const getAll = () => {
    return User.findAll()
}

const getOne = (id) => {
    return User.findOne({
        where: {
            id: id
        }
    })
}

const getUserByEmail = (email) => {
    return User.findOne({
        where: {
            email: email
        }
    })
}

const register = (email, password, first_name=null, is_active=true) => {
    return User.create({
        id: 2,
        email: email,
        passport: passport, 
        first_name: first_name,
        is_active: is_active
    })
}





module.exports = {
    getAll,
    getOne,
    register, 
    getUserByEmail
}
