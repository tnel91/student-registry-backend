const { Course } = require('../models')

const CreateCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body)
    res.send(course)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateCourse
}
