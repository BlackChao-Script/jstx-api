const Router = require("koa-router");
const chitchat = new Router();
const {
  sendMessage,
  getChitchat,
} = require("../controller/chitchat.controller");
const { auth } = require("../middleware/user.middleware");

// 发送聊天信息
chitchat.post("/sendMessage", auth, sendMessage);

// 获取聊天信息列表
chitchat.get("/chitchatList", auth, getChitchat);

module.exports = chitchat;
