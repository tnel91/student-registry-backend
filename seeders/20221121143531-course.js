'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          name: 'English',
          credit_hours: 3,
          course_number: 1101,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Math',
          credit_hours: 4,
          course_number: 1190,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Physics',
          credit_hours: 4,
          course_number: 2211,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Intro to Programing',
          credit_hours: 3,
          course_number: 1301,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Database Systems',
          credit_hours: 3,
          course_number: 3303,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Data Structures',
          credit_hours: 4,
          course_number: 3304,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Biology',
          credit_hours: 3,
          course_number: 2301,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Biology Lab',
          credit_hours: 1,
          course_number: 2302,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
