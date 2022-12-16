const Router = require("koa-router");
const router = new Router();
const user = require("./user");
const chitchat = require("./chitchat");
const search = require("./search");
const friend = require("./friend");
const upload = require("./upload");

router.use("/user", user.routes(), user.allowedMethods());
router.use("/chitchat", chitchat.routes(), chitchat.allowedMethods());
router.use("/search", search.routes(), search.allowedMethods());
router.use("/friend", friend.routes(), friend.allowedMethods());
router.use("/upload", upload.routes(), upload.allowedMethods());

module.exports = router;
