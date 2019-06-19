const User = require('./user');
const Product = require('./product');
const Category = require('./category');

User.hasMany(Product);
Product.belongsTo(User);
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
    User,
    Product,
    Category
}