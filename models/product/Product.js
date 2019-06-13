const Sequalize = require('sequelize');
const db = require('../../database/config');

const Product = db.define('product', {
    title:{
        type: Sequalize.STRING
    },
    price: {
        type: Sequalize.DOUBLE
    },
    description: {
        type: Sequalize.STRING
    },
    quantity: {
        type: Sequalize.INTEGER
    },
    userId: {
        type: Sequalize.INTEGER
    }
})

module.exports = Product;