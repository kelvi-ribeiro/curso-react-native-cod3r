const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const obterHash = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
    })
  }
  const save = (req, res) => {
    const { name, email, password } = req.body
    obterHash(password, hash => {
      const encryptedPassword = hash
      app.db('users')
        .insert({ name, email, password: encryptedPassword })
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    })
  }
  return { save }
}