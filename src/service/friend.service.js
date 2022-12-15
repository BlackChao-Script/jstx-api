const Friend = require("../model/friend.model");
const User = require("../model/user.model");

class FriendService {
  async addServiceFriend(data) {
    const res = await Friend.create(data);
    return res.dataValues;
  }
  async findFriend(friend_id, user_id) {
    const res = await Friend.findOne({
      attributes: ["id", "user_id", "friend_id"],
      where: { friend_id, user_id },
    });
    return res ? res.dataValues : null;
  }
  async getServiceFriendApply(user_id) {
    const res = await Friend.findAll({
      where: { user_id },
      include: {
        model: User,
        as: "friend_data",
        attributes: ["id", "nickname", "avatar"],
      },
    });
    return res;
  }
}

module.exports = new FriendService();
