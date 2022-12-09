const Koa = require("koa2");
const Cors = require("koa2-cors");
const { koaBody } = require("koa-body");
const router = require("../router/index");
const errHandler = require("./errHandler");

const app = new Koa();

app.use(koaBody());
app.use(Cors());
app.use(router.routes(), router.allowedMethods());

app.on("error", errHandler);

module.exports = app;
