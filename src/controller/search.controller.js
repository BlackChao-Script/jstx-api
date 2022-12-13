const { searchServiceUsers } = require("../service/search.service");
const { searchUsersError } = require('../constant/err.type')


class SearchController {
  // 搜索
  async searchUsers(ctx) {
    const { userKeyword } = ctx.request.query;
    try {
      const res = await searchServiceUsers(userKeyword);
      ctx.body = {
        code: 0,
        messge: "搜索成功",
        result: res,
      };
    } catch (err) {
      console.error("搜索失败");
      return ctx.app.emit("error", searchUsersError, ctx);
    }
  }
}

module.exports = new SearchController();
