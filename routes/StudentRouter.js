const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.post('/create', controller.CreateStudent)
router.get('/:studentId', controller.FindStudent)

module.exports = router
