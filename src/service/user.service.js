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
  async getServiceUserInfo(id) {
    const res = await User.findOne({
      where: { id },
    });
    return res ? res.dataValues : null;
  }
  async updateServiceUser(id, data) {
    const res = await User.update(data, { where: { id } });
    return res[0] > 0 ? true : false;
  }
}

module.exports = new UserService();
