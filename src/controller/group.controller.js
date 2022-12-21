const {
  createServiceGroup,
  getServiceGroupList,
} = require("../service/group.service");
const { createGroupError, getGroupListError } = require("../constant/err.type");

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
  async getGroupList(ctx) {
    const { user_id } = ctx.request.query;
    try {
      const res = await getServiceGroupList(user_id);
      ctx.body = {
        code: 0,
        message: "获取群列表数据成功",
        result: res,
      };
    } catch (err) {
      console.error("获取群列表数据失败", err);
      return ctx.app.emit("error", getGroupListError, ctx);
    }
  }
}

module.exports = new groupController();
