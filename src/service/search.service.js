const User = require("../model/user.model");
const Group = require("../model/group.model");
const Friend = require("../model/friend.model");

class SearchService {
  async searchServiceUsers(value, user_id) {
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

    const res = await Friend.findAll();
    const resData = [];
    for (let i of res) {
      if (i.user_id == user_id || i.friend_id == user_id) {
        resData.push(i);
      }
    }
    let userData = {};
    for (let v of resObj.user) {
      userData = resData.find((value) => {
        return value.user_id == v.id || value.friend_id == v.id;
      });
      if (userData) {
        v.dataValues.friend_state = userData.friend_state;
      } else {
        v.dataValues.friend_state = 1;
      }
    }
    return resObj;
  }
}

module.exports = new SearchService();
