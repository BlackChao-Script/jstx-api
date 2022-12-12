const { getServiceChitchats } = require("../service/chitchat.service");
const { getChitchatError } = require("../constant/err.type");

class chitchatController {
  // 获取聊天列表数据
  async getChitchat(ctx) {
    const { user_id } = ctx.request.query;
    try {
      const res = await getServiceChitchats(user_id);
      ctx.body = {
        code: 0,
        message: "",
        result: res,
      };
    } catch (err) {
      console.error("获取聊天列表数据失败");
      return ctx.app.emit("error", getChitchatError, ctx);
    }
  }
}

module.exports = new chitchatController();
