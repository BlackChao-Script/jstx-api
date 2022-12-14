const jwt = require("jsonwebtoken");
const svgCaptcha = require("svg-captcha");

const {
  createUser,
  getUerInfo,
  getServiceUserInfo,
  updateServiceUser,
} = require("../service/user.service");
const transporter = require("../constant/own");
const { JWT_SECRET } = require("../constant/data");
const {
  userLoginError,
  getCodeError,
  getUserInfoError,
  changeUserError,
} = require("../constant/err.type");

class UserController {
  // 获取邮箱验证码
  async getCode(ctx) {
    let mails = ctx.request.query.mail;
    let emailCode = ("000000" + Math.floor(Math.random() * 999999)).slice(-6);
    const mail = {
      from: "c199188177@163.com",
      subject: "jstx--验证码",
      to: mails,
      text: "验证码为：" + emailCode, //发送验证码
    };
    transporter.sendMail(mail, (err, info) => {
      if (!err) {
        console.log("发送成功");
      }
    });
    ctx.body = {
      code: 0,
      message: "获取验证码成功",
      result: emailCode,
    };
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
    const { nickname, user_name, password, mail } = ctx.request.body;
    const res = await createUser(nickname, user_name, password, mail);
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
      const { password, id, ...res } = await getUerInfo({ user_name });
      ctx.body = {
        code: 0,
        message: "用户登录成功",
        result: {
          id,
          token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (err) {
      console.error("用户登录失败", err);
      return ctx.app.emit("error", userLoginError, ctx);
    }
  }
  // 获取用户信息
  async getUserInfo(ctx) {
    const { user_id } = ctx.request.query;
    try {
      const res = await getServiceUserInfo(user_id);
      ctx.body = {
        code: 0,
        message: "获取用户信息成功",
        result: res,
      };
    } catch (err) {
      console.error("获取用户信息失败", err);
      return ctx.app.emit("error", getUserInfoError, cxt);
    }
  }
  // 修改用户信息
  async changeUser(ctx) {
    console.log(ctx.request.body);
    try {
      await updateServiceUser(ctx.params.user_id, ctx.request.body);
      ctx.body = {
        code: 0,
        message: "修改用户信息成功",
        result: "",
      };
    } catch (err) {
      console.error("修改用户信息失败", err);
      return ctx.app.emit("error", changeUserError, ctx);
    }
  }
}

module.exports = new UserController();
