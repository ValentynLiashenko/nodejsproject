const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) {
        res.sendStatus(403);

    }
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();

}

// rewrite this func
const isAuthenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        jwt.verify(bearerHeader.split(' ')[1], 'secretkey', (err, authData) => {
            if (err) {
                console.log(err)
            } else {
                req.user = authData.user
            }
        })
        req.isAuthenticated = true;
        next()
    }
    else {
        return res.send(status = 401)
    }
};

module.exports = {
    isAuthenticated,
    tokenVerify
};
