
const { createServiceGroup } = require('../service/group.service')
const { createGroupError } = require("../constant/err.type");

class groupController {
  async createGroup(ctx) {
    try {
      const res = await createServiceGroup(ctx.request.body);
      ctx.body = {
        code: 0,
        message: "创建群聊成功",
        result: res,
      };
    } catch (err) {
      console.error("创建群聊失败", err);
      return ctx.app.emit("error", createGroupError, ctx);
    }
  }
}

module.exports = new groupController();
