const { User } = require('../models/')  // use es6

const getAll = () => {
    return User.findAll()
}

const getOne = (id) => {
    return User.findOne({
        where: {
            id
        }
    })
}

const getUserByEmail = email => User.findOne({
    where: {
        email
    }
}) // rewrite all like this

const register = (email, password, first_name = null, is_active = true) => {
    return User.create({
        id: 6,    //  ??????????
        email: email,
        password: password,
        first_name: first_name,
        is_active: is_active
    })
}

// user hooks in sequelize for converting snakecase to camelcase




module.exports = {
    getAll,
    getOne,
    register,
    getUserByEmail
}
