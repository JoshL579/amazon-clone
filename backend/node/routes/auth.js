var express = require('express')
var router = express.Router()
const authService = require('../service/auth')

/* login */
router.post('/login', async (req, res, next) => {
  return authService.login(req, res, next)
})

/* signup */
router.post('/signup', async (req, res, next) => {
  return authService.signup(req, res, next)
})

module.exports = router
