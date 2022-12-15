const Router = require("koa-router");
const user = new Router();
const {
  getCode,
  getInfoCode,
  register,
  login,
  getUserInfo,
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
// 获取用户信息
user.get("/getUserInfo", getUserInfo);

module.exports = user;
