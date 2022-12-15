const Router = require("koa-router");
const upload = new Router();
const { uploads } = require("../controller/upload.controller");

// 上传
upload.post("/", uploads);

module.exports = upload;
