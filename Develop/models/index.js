// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  throughModel: 'ProductTag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  throughModel: 'ProductTag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};