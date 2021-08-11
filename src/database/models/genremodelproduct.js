'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreModelProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  GenreModelProduct.init({
    productId: DataTypes.INTEGER,
    genreModelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GenreModelProduct',
  });
  return GenreModelProduct;
};