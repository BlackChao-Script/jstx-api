const Router = require("koa-router");
const Search = new Router();

const { searchUsers } = require("../controller/search.controller");

// 搜索用户群组
Search.get("/", searchUsers);

module.exports = Search;
