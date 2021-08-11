'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //belongsTo
      Product.belongsTo(models.Brand);
      
      //belongsToMany
      Product.belongsToMany(models.Color , {
        as: 'colors',
        through: 'ColorProduct'
      });
      Product.belongsToMany(models.Category , {
        as: 'categories',
        through: 'CategoryProduct'
      });
      Product.belongsToMany(models.Size , {
        as: "sizes",
        through: "SizeProduct"
      });
      Product.belongsToMany(models.OrderProduct , {
        as: "orders",
        through: "OrderProduct"
      });

    }
  };
  Product.init({
    model: DataTypes.STRING,
    desc1: DataTypes.TEXT,
    desc2: DataTypes.TEXT,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    image4: DataTypes.STRING,
    keywords: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    cuotas: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};