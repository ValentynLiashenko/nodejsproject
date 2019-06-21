const jwt = require('jsonwebtoken');

// rewrite this func

const getToken = (user) => {
    return jwt.sign({user}, 'secretkey');
}

module.exports = {
    getToken
}