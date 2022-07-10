const crypto = require('crypto')
const { getRandomString } = require('./random')

const sha256 = (password, salt) => {
  let hash = crypto.createHmac('sha256', salt) /** Hashing algorithm sha512 */
  hash.update(password)
  const value = hash.digest('hex')
  return {
    salt: salt,
    passwordHash: value,
  }
}

const encryptPassword = (password) => {
  //   const salt = getRandomString(16)
  const salt = 'test-salt'
  return sha256(password, salt)
}

module.exports = { sha256, encryptPassword }
