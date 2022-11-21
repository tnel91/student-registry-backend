const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.post('/create', controller.CreateCourse)

module.exports = router
