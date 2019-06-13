const User = require('./user/User');
const Product = require('./product/Product');


User.hasMany(Product)
Product.belongsTo(User)

module.exports = {
    User,
    Product
}