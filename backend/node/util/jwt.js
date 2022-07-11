const jwt = require('jsonwebtoken')

const TOKEN_SECRET = 'test_token'

const generateJwt = (userId) => {
  console.log('generating', userId)
  return jwt.sign({ id: userId }, TOKEN_SECRET, { expiresIn: 10800 }) // 3hours
}

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

module.exports = { generateJwt, authenticateToken }
