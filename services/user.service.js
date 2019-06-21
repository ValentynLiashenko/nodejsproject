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

const register = (email, password, first_name=null, last_name=null, is_active=true) => {
    console.log(email, password, first_name, last_name, is_active)
    try{

    User.create({
        email: email,
        password: password, 
        first_name: first_name,
        last_name: last_name,
        is_active: is_active
    })
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    getAll,
    getOne,
    register, 
    getUserByEmail
}
