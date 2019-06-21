const Sequalize = require('sequelize');
const db = require('../../database/config');

const User = db.define('users', {
    email:{
        type: Sequalize.STRING
    },
    password: {
        type: Sequalize.TEXT
    },
    is_active: {
        type: Sequalize.BOOLEAN
    },
    first_name: {
        type: Sequalize.STRING
    },
    last_name: {
        type: Sequalize.STRING
    }
});

module.exports = User;