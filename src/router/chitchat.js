const Router = require("koa-router");
const chitchat = new Router();
const { getChitchat } = require("../controller/chitchat.controller");

// 获取聊天信息列表
chitchat.get("/chitchatList", getChitchat);

module.exports = chitchat;
