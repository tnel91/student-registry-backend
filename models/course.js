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
      Course.belongsToMany(models.Student, {
        as: 'course_grade',
        through: models.Grade,
        foreignKey: 'courseId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      credit_hours: DataTypes.INTEGER,
      course_number: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
