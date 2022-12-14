const Friend = require("../model/friend.model");

class FriendService {
  async addServiceFriend(data) {
    const res = await Friend.create(data);
    return res.dataValues;
  }
}

module.exports = new FriendService();
