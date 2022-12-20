const Router = require("koa-router");
const Friend = new Router();

const {
  addfriend,
  getFriendApply,
  changFriend,
} = require("../controller/friend.controller");
const { friendValidator } = require("../middleware/friend.middleware");
const { auth } = require("../middleware/user.middleware");

// 添加好友
Friend.post("/addfriend", auth, friendValidator, addfriend);
// 获取好友申请列表
Friend.get("/getFriendApply", auth, getFriendApply);
// 改变好友申请状态
Friend.put("/changFriend/:user_id", auth, changFriend);

module.exports = Friend;
