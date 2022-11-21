const { Grade } = require('../models')
const { Student } = require('../models')
const { Course } = require('../models')

const CreateGrade = async (req, res) => {
  try {
    const grade = await Grade.create(req.body)
    res.send(grade)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetStudentsWithCourse = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [{ model: Course, as: 'student_course' }]
    })
    res.send(students)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetStudentWithCourse = async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.studentId },
      include: [{ model: Course, as: 'student_course' }]
    })
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateGrade = async (req, res) => {
  try {
    const grade = await Grade.update(
      { ...req.body },
      {
        where: {
          studentId: req.params.studentId,
          courseId: req.params.courseId
        },
        returning: true
      }
    )
    res.send(grade)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateGrade,
  GetStudentsWithCourse,
  UpdateGrade,
  GetStudentWithCourse
}
