const Sequalize = require('sequelize');
const db = require('../../database/config');

const Product = db.define('category', {
    title:{
        type: Sequalize.STRING
    },
    productId: {
        type: Sequalize.INTEGER
    }
})

module.exports = Product;