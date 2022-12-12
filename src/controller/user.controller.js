const jwt = require("jsonwebtoken");
const svgCaptcha = require("svg-captcha");

const { createUser, getUerInfo } = require("../service/user.service");
const send_email = require("../constant/own");
const { JWT_SECRET } = require("../constant/data");
const { userLoginError } = require("../constant/err.type");

let codeObj = "";

class UserController {
  // 获取邮箱验证码
  async getCode(ctx) {
    let { email } = ctx.request.query;
    let emailCode = Math.floor(Math.random() * 11000 - 1001);
    codeObj = emailCode;
    const mail = {
      from: "c199188177@163.com",
      subject: "jstx--验证码",
      to: email,
      text: "验证码为：" + emailCode, //发送验证码
    };
    send_email(mail);
  }
  // 获取图形验证码
  async getInfoCode(ctx) {
    const c = svgCaptcha.create({
      size: 6, // 验证码长度
      ignoreChars: "0o1i", // 验证码字符中排除 0o1i
      color: true, // 验证码是否有彩色
      noise: 1, //干扰线
      background: "#d4d4d6", // 背景颜色
    });
    ctx.body = {
      code: 0,
      message: "获取验证码成功",
      result: {
        c,
      },
    };
  }
  // 注册
  async register(ctx) {
    const { nickname, user_name, password } = ctx.request.body;
    const res = await createUser(nickname, user_name, password);
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        id: res.id,
        user_name: res.user_name,
      },
    };
  }
  // 登录
  async login(ctx) {
    const { user_name } = ctx.request.body;
    try {
      const { password, ...res } = await getUerInfo({ user_name });
      ctx.body = {
        code: 0,
        message: "用户登录成功",
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (err) {
      console.error("用户登录失败", err);
      return ctx.app.emit("error", userLoginError, ctx);
    }
  }

}

module.exports = new UserController();
