const Router = require("koa-router");
const Friend = new Router();

const { addfriend } = require("../controller/friend.controller");

// 添加好友
Friend.post("/addfriend", addfriend);

module.exports = Friend;
