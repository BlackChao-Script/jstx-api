const Router = require("koa-router");
const group = new Router();
const { createGroup } = require("../controller/group.controller");

// 创建群聊
group.post("/", createGroup);

module.exports = group;
