const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Chitchat = seq.define(
  "jstx_chitchat",
  {
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "发送者id",
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "接收者id",
    },
    sendcontent: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "发送内容",
    },
    content_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "发送类型(0:文字; 1:图片链接; 2:音频链接)",
    },
    message_state: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "消息状态(0:已读; 1:未读)",
    },
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: true, // 是否开启时间戳
    createdAt: "send_time", // 自定义创建时的时间戳
    updatedAt: false, // 关闭更新时间戳
  }
);

// Chitchat.sync({ alter: true });

module.exports = Chitchat;
