const {
  getServiceChitchatData,
  sendServiceMessage,
} = require("../service/chitchat.service");
const { getChitchatError, sendMessageError } = require("../constant/err.type");

class chitchatController {
  // 发送聊天信息
  async sendMessage(ctx) {
    try {
      const res = await sendServiceMessage(ctx.request.body);
      ctx.body = {
        code: 0,
        message: "发送聊天信息成功",
        result: res,
      };
    } catch (err) {
      console.error("发送聊天信息失败", err);
      return ctx.app.emit("error", sendMessageError, ctx);
    }
  }

  // 获取聊天数据
  async getChitchat(ctx) {
    const { user_id, friend_id } = ctx.request.query;
    try {
      const res = await getServiceChitchatData(user_id, friend_id);
      ctx.body = {
        code: 0,
        message: "",
        result: res,
      };
    } catch (err) {
      console.error("获取聊天数据失败");
      return ctx.app.emit("error", getChitchatError, ctx);
    }
  }
}

module.exports = new chitchatController();
