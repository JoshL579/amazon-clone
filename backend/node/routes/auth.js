var express = require('express')
var router = express.Router()
const authService = require('../service/auth')
const { authenticateToken } = require('../util/jwt')

/* login */
router.post('/login', async (req, res, next) => {
  return authService.login(req, res, next)
})

/* signup */
router.post('/signup', async (req, res, next) => {
  return authService.signup(req, res, next)
})

/* auth */
router.get('/varification', authenticateToken, async (req, res, next) => {
  return res.json({ success: true, valid: true })
})

module.exports = router
