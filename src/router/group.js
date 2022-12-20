const Router = require("koa-router");
const group = new Router();
const { createGroup } = require("../controller/group.controller");
const { auth } = require("../middleware/user.middleware");

// 创建群聊
group.post("/create", auth, createGroup);

module.exports = group;
