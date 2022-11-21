const { Student } = require('../models')

const CreateStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const FindStudent = async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.studentId }
    })
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateStudent,
  FindStudent
}
