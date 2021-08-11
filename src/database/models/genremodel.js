'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongsToMany

      GenreModel.belongsToMany(models.Product , {
        as:'genresModel',
        through: "GenreModelProduct"
      });
    }
  };
  GenreModel.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GenreModel',
  });
  return GenreModel;
};