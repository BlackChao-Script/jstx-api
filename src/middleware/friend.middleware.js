
const { findFriend } = require("../service/friend.service");
const {
  friendAlreadyExited,
  friendRegisterError,
} = require("../constant/err.type");

// 判断好友是否已经存在中间件
const friendValidator = async (ctx, next) => {
  const { friend_id, user_id } = ctx.request.body;
  try {
    const res = await findFriend(friend_id, user_id);
    if (res) {
      console.log("好友关系或者申请已存在");
      return ctx.app.emit("error", friendAlreadyExited, ctx);
    }
  } catch (err) {
    console.error("获取好友关系或者申请错误", err);
    return ctx.app.emit("error", friendRegisterError, ctx);
  }
  await next();
};

module.exports = {
  friendValidator,
};
