const Chitchats = require("../model/chitchat.model");
const User = require("../model/user.model");

class ChitchatService {
  async sendServiceMessage(data) {
    console.log(data);
    data.send_time = new Date();
    const res = await Chitchats.create(data);
    return res.dataValues;
  }

  async getServiceChitchatData(user_id, friend_id) {
    const res = await Chitchats.findAll();
    const resData = [];
    for (let i of res) {
      if (i.user_id == user_id || i.user_id == friend_id) {
        if (i.friend_id == friend_id || i.friend_id == user_id) {
          resData.push(i);
        }
      }
    }
    for (let value of resData) {
      value.friend_id = await User.findOne({
        where: { id: value.friend_id },
        attributes: ["id", "avatar", "nickname"],
      });
      value.user_id = await User.findOne({
        where: { id: value.user_id },
        attributes: ["id", "avatar", "nickname"],
      });
    }
    return resData;
  }

  // 获取聊天列表数据
  // async getServiceChitchats(user_id) {
  //   const res = await Chitchats.findAll({ where: { user_id } });

  //   let result = [];
  //   let resdata = [];
  //   let obj = {};

  //   const ids = res.map((value) => value.dataValues.friend_id);
  //   const idsSet = new Set(ids);
  //   if (idsSet.size !== ids.length) {
  //     for (let i in res) {
  //       if (!obj[res[i].key]) {
  //         result.push(res[i]);
  //         obj[res[i].key] = true;
  //       } else {
  //         resdata.push(res[i]);
  //       }
  //     }
  //   } else {
  //     resdata = res;
  //   }
  //   return {
  //     resdata,
  //   };
  // }
}

module.exports = new ChitchatService();
