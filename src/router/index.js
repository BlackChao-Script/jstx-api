const Router = require("koa-router");
const router = new Router();
const user = require("./user");
const chitchat = require('./chitchat')
const search = require('./search')

router.use("/user", user.routes(), user.allowedMethods());
router.use("/chitchat", chitchat.routes(), chitchat.allowedMethods());
router.use("/search", search.routes(), search.allowedMethods());

module.exports = router;
