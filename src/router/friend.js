const Router = require("koa-router");
const Friend = new Router();

const {
  addfriend,
  getFriendApply,
} = require("../controller/friend.controller");
const { friendValidator } = require("../middleware/friend.middleware");

// 添加好友
Friend.post("/addfriend", friendValidator, addfriend);
// 获取好友申请列表
Friend.get("/getFriendApply", getFriendApply);

module.exports = Friend;
