const Router = require("koa-router");
const user = new Router();
const {
  getCode,
  getInfoCode,
  register,
  login,
} = require("../controller/user.controller");
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require("../middleware/user.middleware");
// 获取邮箱验证码
user.get("/getCode", getCode);
// 获取图形验证码
user.get("/getInfoCode", getInfoCode);
// 注册
user.post("/register", userValidator, verifyUser, crpytPassword, register);
// 登录
user.post("/login", userValidator, verifyLogin, login);

module.exports = user;
