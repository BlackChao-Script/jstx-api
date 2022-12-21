const Router = require("koa-router");
const group = new Router();
const { createGroup, getGroupList } = require("../controller/group.controller");
const { auth } = require("../middleware/user.middleware");

// 创建群聊
group.post("/create", auth, createGroup);
// 获取群列表
group.get("/getList", auth, getGroupList);

module.exports = group;
