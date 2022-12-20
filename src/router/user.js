const Router = require("koa-router");
const user = new Router();
const {
  getCode,
  getInfoCode,
  register,
  login,
  getUserInfo,
  changeUser,
} = require("../controller/user.controller");
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  auth,
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
user.get("/getUserInfo", auth, getUserInfo);
// 修改用户信息
user.put("/modify/:user_id", auth, changeUser);

module.exports = user;
