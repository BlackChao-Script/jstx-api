const User = require("../model/user.model");

class UserService {
  async createUser(nickname, user_name, password, mail) {
    const res = await User.create({
      nickname,
      user_name,
      password,
      mail,
    });
    return res.dataValues;
  }
  async getUerInfo({ ...arg }) {
    const whereOpt = { ...arg };
    const res = await User.findOne({
      attributes: ["id", "user_name", "password"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }
}

module.exports = new UserService();
