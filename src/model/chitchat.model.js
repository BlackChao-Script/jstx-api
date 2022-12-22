const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
// const User = require("./user.model");
// const Friend = require("./friend.model");

const Chitchat = seq.define(
  "jstx_chitchat",
  {
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "好友id",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "用户id",
    },
    sendcontent: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "发送内容",
    },
    content_type: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
      comment: "发送类型(0:文字; 1:图片链接; 2:音频链接)",
    },
    message_state: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      comment: "消息状态(0:已读; 1:未读)",
    },
    send_time: {
      type: DataTypes.DATE,
      comment: "发送消息时间",
    },
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: false, // 是否开启时间戳
    updatedAt: false, // 关闭更新时间戳
  }
);

// Chitchat.sync({ alter: true });

module.exports = Chitchat;
