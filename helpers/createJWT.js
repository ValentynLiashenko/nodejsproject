const jwt = require('jsonwebtoken');

const getToken = (user) => {
    return jwt.sign({user}, 'secretkey');
}

module.exports = {
    getToken
}