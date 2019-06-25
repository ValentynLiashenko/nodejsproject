const TokenJWT = require('../helpers/createJWT');
const User = require('../services/user.service');

const validators = require('../helpers/validators')


const loginUser = async (req, res) => { 
    const { id } = await User.getUserByEmail(req.body['email'])
    return res.json({
        token: TokenJWT.getToken(id),
    })
}

// rewrite this fucking func
const createUser = async (req, res, next) => {
    let { email, password, first_name } = req.body
    if (!validators.userRegisterDataValidation){
        return res.send(status=400)
    } else {
        user.getUserByEmail(email)
            .then(instance => {
                if(instance){
                    return res.json({
                        'error': 'This user already exist'
                    })
                } else {
                    // rewrite it by primises
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            user.register(email, hash, first_name)
                                .then(user => {
                                    return res.json(user)
                                })
                                .catch(error => {
                                    next(error)
                                })
                        });
                    })
                }
            })
    }
}

module.exports = {
    loginUser,
    createUser
}