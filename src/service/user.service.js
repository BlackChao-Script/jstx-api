const User = require("../model/user.model");

class UserService {
  async createUser(nickname, user_name, password) {
    const res = await User.create({
      nickname,
      user_name,
      password,
    });
    return res.dataValues;
  }
  async getUerInfo({ ...arg }) {
    const whereOpt = { ...arg };
    const res = await User.findOne({
      attributes: ["id", "nickname", "user_name", "password"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }
}

module.exports = new UserService();
