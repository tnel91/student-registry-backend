const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.post('/create', controller.CreateCourse)
router.get('/retrieve', controller.FindCourses)
router.get('/:courseId', controller.FindCourse)

module.exports = router
