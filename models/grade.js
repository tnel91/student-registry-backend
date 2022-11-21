'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grade.init(
    {
      score: DataTypes.DECIMAL,
      letter: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Grade',
      tableName: 'grades'
    }
  )
  return Grade
}
