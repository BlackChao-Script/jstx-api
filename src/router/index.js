const Router = require("koa-router");
const router = new Router();
const user = require("./user");
const chitchat = require('./chitchat')

router.use("/user", user.routes(), user.allowedMethods());
router.use("/chitchat", chitchat.routes(), chitchat.allowedMethods());

module.exports = router;
