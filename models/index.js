const User = require('./user');
const Product = require('./product');
const Category = require('./category');

User.hasMany(Product);
Product.belongsTo(User);
Product.hasMany(Category);
Category.belongsTo(Product);

module.exports = {
    User,
    Product,
    Category
}