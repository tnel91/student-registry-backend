const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.post('/create', controller.CreateStudent)
router.get('/retrieve', controller.FindStudents)
router.get('/:studentId', controller.FindStudent)
router.delete('/delete/:studentId', controller.DeleteStudent)

module.exports = router
