const nodemailer = require("nodemailer");
//创建smtp服务器 —— 邮箱验证
const config = {
  host: "smtp.163.com", // 邮箱服务的主机
  port: 465, // 端口
  secureConnection: false, // 用不用 SSL
  auth: {
    user: "c199188177@163.com",
    pass: "XKIWWBSYKBCGBFXH",
  },
};
// 创建MTP客户端对象
const transporter = nodemailer.createTransport(config);
// 发送邮件
module.exports = function (mail) {
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("发送成功");
  });
};
