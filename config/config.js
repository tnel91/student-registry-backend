require('dotenv').config()
module.exports = {
  development: {
    database: 'hackathon2_development',
    dialect: 'postgres'
  },
  test: {
    database: 'hackathon2_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
