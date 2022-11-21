const { Student } = require('../models')

const FindStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

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

const DeleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.studentId } })
    res.send({ msg: 'Student Deleted' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateStudent,
  FindStudent,
  FindStudents,
  DeleteStudent
}
