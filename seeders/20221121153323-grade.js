'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const grades = [...Array(50)].map((_) => {
      return {
        studentId: falso.randNumber({ min: 1, max: 22 }),
        courseId: falso.randNumber({ min: 1, max: 8 }),
        score: falso.randFloat({ min: 1, max: 4, fraction: 1 }),
        letter: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('grades', grades, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grades', null, {})
  }
}
