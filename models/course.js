'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      credit_hours: DataTypes.INTEGER,
      course_number: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
