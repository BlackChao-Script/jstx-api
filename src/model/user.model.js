const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const User = seq.define(
  "jstx_user",
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false, // 字段是否允许为空
      unique: true,
      comment: "用户名，唯一",
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "昵称",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "邮箱",
    },
    sex: {
      type: DataTypes.STRING,
      comment: "性别",
    },
    avatar: {
      type: DataTypes.STRING,
      comment: "用户头像",
    },
    signature: {
      type: DataTypes.STRING,
      comment: "签名",
    },
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: true, // 是否开启时间戳
    createdAt: "register_time", // 自定义创建时的时间戳
    updatedAt: false, // 关闭更新时间戳
  }
);

// User.sync({ alter: true });

module.exports = User;
