var express = require('express')
var router = express.Router()
const { encryptPassword } = require('../util/sha256')
const { userDbHandler } = require('../mapper/auth')

/* login */
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  const passwordEncoded = encryptPassword(password).passwordHash
  const user = await userDbHandler.findUserByEmail(email)

  if (!user)
    return res.json({ success: false, message: 'Invalid Email/Password' })

  const dbPassword = user.password
  if (dbPassword === passwordEncoded) {
    return res.json({ success: true })
  }

  return res.json({ success: false, message: 'Invalid Email/Password' })
})

/* register */
router.post('/register', async (req, res, next) => {
  const { email, password, name } = req.body
  const user = {
    email: email,
    password: password,
    name: name,
  }
  const dbRes = await userDbHandler.createUser(user)
  return res.json({ success: dbRes ? true : false })
})

module.exports = router
