const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const GroupMsg = seq.define(
  "jstx_GroupMsg",
  {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "群id",
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "发送者id",
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
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: true, // 是否开启时间戳
    createdAt: "send_time", // 自定义创建时的时间戳
    updatedAt: false, // 关闭更新时间戳
  }
);

// GroupMsg.sync({ alter: true });

module.exports = GroupMsg;
