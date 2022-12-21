const {
  addfriendError,
  getFriendApplyError,
  changFriendError,
  getStateError,
} = require("../constant/err.type");
const {
  addServiceFriend,
  getServiceFriendApply,
  getServiceFriendApplys,
  changServiceFriend,
  getServiceState,
} = require("../service/friend.service");

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
      console.error("添加请求发送失败", err);
      return ctx.app.emit("error", addfriendError, ctx);
    }
  }
  async getFriendApply(ctx) {
    const { user_id } = ctx.request.query;
    try {
      const res = await getServiceFriendApplys(user_id);
      ctx.body = {
        code: 0,
        message: "获取好友申请列表成功",
        result: res,
      };
    } catch (err) {
      console.error("获取好友申请列表失败", err);
      return ctx.app.emit("error", getFriendApplyError, ctx);
    }
  }
  async changFriend(ctx) {
    const { user_id } = ctx.request.params;
    const { friend_state } = ctx.request.body;
    try {
      const res = await changServiceFriend(user_id, friend_state);
      ctx.body = {
        code: 0,
        message: "更改申请状态成功",
        result: res,
      };
    } catch (err) {
      console.error("更改申请状态失败", err);
      return ctx.app.emit("error", changFriendError, ctx);
    }
  }
}

module.exports = new friendController();
