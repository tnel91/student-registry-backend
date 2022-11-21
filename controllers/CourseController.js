const { Course } = require('../models')

const FindCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const FindCourse = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: { id: req.params.courseId }
    })
    res.send(course)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const CreateCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body)
    res.send(course)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateCourse,
  FindCourses,
  FindCourse
}
