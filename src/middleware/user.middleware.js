const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../constant/data");
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userNotExistence,
  invalidPassword,
  userLoginError,
  TokenExpiredError,
  invalidToken,
} = require("../constant/err.type");
const { getUerInfo } = require("../service/user.service");

// 处理用户或密码是否为空中间件
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  if (!user_name || !password) {
    console.log("用户名或密码为空", ctx.request.body);
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};
// 判断用户是否已经存在中间件
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  try {
    const res = await getUerInfo({ user_name });
    if (res) {
      console.log("用户名已存在", { user_name });
      return ctx.app.emit("error", userAlreadyExited, ctx);
    }
  } catch (err) {
    console.error("获取用户信息错误", err);
    return ctx.app.emit("error", userRegisterError, ctx);
  }
  await next();
};
// 处理密码加密中间件
const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
};
// 处理用户登录中间件
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  try {
    const res = await getUerInfo({ user_name });
    if (!res) {
      console.log("用户名不存在", { user_name });
      return ctx.app.emit("error", userNotExistence, ctx);
    }
    if (!bcrypt.compareSync(password, res.password)) {
      console.log("密码错误");
      return ctx.app.emit("error", invalidPassword, ctx);
    }
  } catch (err) {
    console.error(err);
    return ctx.app.emit("error", userLoginError, ctx);
  }
  await next();
};
// 判断token中间件
const auth = async (ctx, next) => {
  const { authorization = "" } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");
  try {
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
  } catch (err) {
    switch (err.name) {
      case "TokenExpiredError":
        console.error("token已过期", err);
        return ctx.app.emit("error", TokenExpiredError, ctx);
      case "JsonWebTokenError":
        console.error("无效token", err);
        return ctx.app.emit("error", invalidToken, ctx);
    }
  }
  await next();
};

module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  auth,
};
