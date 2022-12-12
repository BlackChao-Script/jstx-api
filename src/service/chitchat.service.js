const Chitchats = require("../model/chitchat.model");

class ChitchatService {
  // 获取聊天列表数据
  async getServiceChitchats(user_id) {
    const res = await Chitchats.findAll({ where: { user_id } });

    let result = [];
    let resdata = [];
    let obj = {};
    
    const ids = res.map((value) => value.dataValues.friend_id);
    const idsSet = new Set(ids);
    if (idsSet.size !== ids.length) {
      for (let i in res) {
        if (!obj[res[i].key]) {
          result.push(res[i]);
          obj[res[i].key] = true;
        } else {
          resdata.push(res[i]);
        }
      }
    } else {
      resdata = res;
    }
    return {
      resdata,
    };
  }
}

module.exports = new ChitchatService();
