const User = require("../model/user.model");
const Group = require("../model/group.model");

class SearchService {
  async searchServiceUsers(value) {
    let resObj = {
      user: [],
      group: [],
    };
    const nickname = value;
    const group_name = value;
    resObj.user = await User.findAll({
      attributes: ["id", "user_name", "avatar", "nickname"],
      where: { nickname },
    });
    resObj.group = await Group.findAll({
      attributes: ["id", "group_name", "group_cover"],
      where: { group_name },
    });
    return {
      resObj,
    };
  }
}

module.exports = new SearchService();
