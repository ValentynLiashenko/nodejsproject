const user = require('../services/user.service')

getAll = async (req, res, next) => {
    user.getAll()
        .then(users => {
            return res.json(users)
        })
        .catch(error => {
            next(error)
        })
}

const getOne = async (req, res, next) => {
    user.getOne(req.params.id)
        .then(user => {
            return res.json(user)
        })
        .catch(error => {
            next(error)
        })
}

const createUser = async (req, res, next) => {
    let { email, password, password2, first_name } = req.body
    if(!email){
        return res.json({
            'error': 'enter email!'
        })
    }
    if(!password || !password2){
        return res.json({
            'error': 'enter passwords'
        })
    }
    if(!first_name){
        first_name = null
    }
    if(password!==password2){
        return res.json({
            'error': 'password dont match'
        })
    } else {
        user.getUserByEmail(email)
            .then(instance => {
                if(instance){
                    return res.json({
                        'error': 'This user already exist'
                    })
                } else {
                    user.register(email, password, first_name)
                        .then(user => {
                            return res.json(user)
                        })
                        .catch(error => {
                            next(error)
                        })
                }
            })
    }
}


module.exports = {
    getAll,
    getOne, 
    createUser
}