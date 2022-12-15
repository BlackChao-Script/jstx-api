const Koa = require("koa2");
const Cors = require("koa2-cors");
const { koaBody } = require("koa-body");
const Static = require("koa-static");
const { join } = require("path");

const router = require("../router/index");
const errHandler = require("./errHandler");

const app = new Koa();

app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: join(__dirname, "../assets/uploads"),
      keepExtensions: true,
    },
    parsedMethods: ["POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(Static(join(__dirname, '../assets')))
app.use(Cors());
app.use(router.routes(), router.allowedMethods());

app.on("error", errHandler);

module.exports = app;
