const { addfriendError } = require("../constant/err.type");
const { addServiceFriend } = require("../service/friend.service");

class friendController {
  async addfriend(ctx) {
    try {
      const res = await addServiceFriend(ctx.request.body);
      ctx.body = {
        code: 0,
        message: "添加请求发送成功",
        result: res,
      };
    } catch (err) {
      console.error("添加请求发送失败");
      return ctx.app.emit("error", addfriendError, ctx);
    }
  }
}

module.exports = new friendController();
