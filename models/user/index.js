const Sequalize = require('sequelize');
const db = require('../../database/config');

const User = db.define('users', {
    id: {
        type: Sequalize.INTEGER,
        primaryKey: true
    },
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
        type: Sequalize.INTEGER
    }
});

module.exports = User;