const jwt = require('jsonwebtoken')
const testRoutes = require('express').Router()
const Test = require('../models/skeleton')
const middleware = require('../utils/middleware')

testRoutes.get('/', async (request, response) => {
  response.status(200).json( {message: 'Welcome to the skeleton API'} )
})

module.exports = testRoutes
