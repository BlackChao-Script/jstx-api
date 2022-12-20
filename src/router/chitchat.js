const Router = require("koa-router");
const chitchat = new Router();
const { getChitchat } = require("../controller/chitchat.controller");
const { auth } = require("../middleware/user.middleware");

// 获取聊天信息列表
chitchat.get("/chitchatList", auth, getChitchat);

module.exports = chitchat;
