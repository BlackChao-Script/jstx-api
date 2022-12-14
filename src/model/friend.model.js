const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Friend = seq.define(
  "jstx_friend",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "用户id",
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "好友id",
    },
    friend_state: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      comment: "好友状态(0:以为好友; 1:申请中; 2:申请发送方,对方还未同意)",
    },
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: true, // 是否开启时间戳
    createdAt: "application_time", // 自定义创建时的时间戳
    updatedAt: false, // 关闭更新时间戳
  }
);

// Friend.sync({ alter: true });

module.exports = Friend;
