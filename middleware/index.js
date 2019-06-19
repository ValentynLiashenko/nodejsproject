const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

const isAuthenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        jwt.verify(bearerHeader.split(' ')[1], 'secretkey', (err, authData) => {
            if (err){
                console.log(err)
            } else {
                req.user = authData.user
            }
        })
        req.isAuthenticated = true;
        next()
    }
    else {
        return res.send(status=401)
    }
};

module.exports = {
    isAuthenticated,
    tokenVerify
};
