const Router = require("koa-router");
const Friend = new Router();

const {
  addfriend,
  getFriendApply,
  changFriend,
} = require("../controller/friend.controller");
const { friendValidator } = require("../middleware/friend.middleware");

// 添加好友
Friend.post("/addfriend", friendValidator, addfriend);
// 获取好友申请列表
Friend.get("/getFriendApply", getFriendApply);
// 改变好友申请状态
Friend.put("/changFriend/:user_id", changFriend);

module.exports = Friend;
