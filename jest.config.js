const { defaults } = require('jest-config')

module.exports = {
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    'src/'
  ],
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js'
  ]
}
