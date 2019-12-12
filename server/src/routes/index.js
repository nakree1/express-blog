const { Router } = require('express');
const auth = require('./auth');

module.exports = Router().use('/auth', auth);
