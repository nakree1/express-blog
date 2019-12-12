const { Router } = require('express');
const login = require('../controllers/auth/login');
const signup = require('../controllers/auth/signup');

const validateRequest = require('../middlewares/validateRequest');
const validateSignup = require('../utils/validation/validateSignup');

module.exports = Router()
  .post('/sign_up', validateRequest(validateSignup), signup)
  .post('/login', login);
