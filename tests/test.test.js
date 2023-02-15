/* eslint-env jest */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../app')
const Test = require('../models/test')
const User = require('../models/user')

describe('viewing all blogs', () => {
  test('it should to return ', async () => {
    const response = await request(app).get('/api/test')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body).toBe('Welcome to the test API')
  })
})