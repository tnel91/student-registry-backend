'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = [...Array(22)].map((_) => {
      return {
        name: falso.randFullName(),
        email: falso.randEmail(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('students', students, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
