const TokenJWT = require('../helpers/createJWT');
const User = require('../services/user.service');

const validators = require('../helpers/validators')

const tokenVerify = (req, res) => {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        next();
    } else {
        res.sendStatus(403);
    }
}

const loginUser = async (req, res) => {
    let user = await User.getUserByEmail(req.body['email'])
    user = user.dataValues.id
    const token = TokenJWT.getToken(user.id);
    return res.json({
        'token': token
    })
}

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

const test = async (req, res, next) => {
    res.status(status=200);
}

module.exports = {
    loginUser,
    createUser,
    tokenVerify,
    test
}