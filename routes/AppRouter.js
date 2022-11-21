const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const GradeRouter = require('./GradeRouter')
Router.use('/student', StudentRouter)
Router.use('/course', CourseRouter)
Router.use('/grade', GradeRouter)
module.exports = Router
