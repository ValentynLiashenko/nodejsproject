const { User } = require('../models/')

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
        id: 6,
        email: email,
        password: password, 
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
