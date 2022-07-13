const { encryptPassword } = require("../util/sha256");
const userDbHandler = require("../mapper/user");
const { generateJwt } = require("../util/jwt");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const passwordEncoded = encryptPassword(password).passwordHash;
  const user = await userDbHandler.findUserByEmail(email);

  if (!email || !password) {
    return res.status(400).send("Please enter required fields.");
  }

  if (!user)
    return res.json({ success: false, message: "Invalid Email/Password" });

  const dbPassword = user.password;
  if (dbPassword !== passwordEncoded) {
    return res.json({ success: false, message: "Invalid Email/Password" });
  }

  const token = generateJwt(user.id);
  res.cookie("token", token, { httpOnly: true });
  return res.json({ success: true });
};

const signup = async (req, res, next) => {
  const { email, password, name } = req.body;
  const user = {
    email: email,
    password: password,
    name: name,
  };

  if (!email || !password || !name) {
    return res.status(400).send("Please enter required fields.");
  }

  const dbRes = await userDbHandler.createUser(user);
  return res.json({ success: dbRes ? true : false });
};

const resetPassword = () => {};

const checkToken = () => {};

const authService = {
  login: login,
  signup: signup,
  resetPassword: resetPassword,
  checkToken: checkToken,
};

module.exports = authService;
