const router = require('express').Router()
const controller = require('../controllers/GradeController')

router.post('/create', controller.CreateGrade)
router.get('/retrieve', controller.GetStudentsWithCourse)
router.get('/retrieve/:studentId', controller.GetStudentWithCourse)
router.put('/:studentId/:courseId', controller.UpdateGrade)

module.exports = router
