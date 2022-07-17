const jwt = require('jsonwebtoken')

const TOKEN_SECRET = 'test_token'

const generateJwt = (login = false, userId) => {
  return jwt.sign({
    login: login, userId: userId
  }, TOKEN_SECRET, { expiresIn: 10800 }) // 3hours
}

const authenticateToken = (req, res, next) => {
  // const authHeader = req.headers['authorization']
  // const token = authHeader && authHeader.split(' ')[1]
  const token = req.cookies.token
  console.log(token)

  if (!token) {
    let tempUserId
    if (req.cookies.uid) {
      tempUserId = req.cookies.uid
    } else {
      tempUserId = parseInt(Date.now().toString() + Math.floor(Math.random() * 1000).toString())
    }
    const token = generateJwt(false, tempUserId);
    res.cookie("token", token, { httpOnly: true });
    res.cookie("uid", tempUserId);
    return res.json({ success: true, uid: tempUserId });
    // res.sendStatus(401)
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

module.exports = { generateJwt, authenticateToken }
