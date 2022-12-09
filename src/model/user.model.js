const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const User = seq.define(
  "jstx_user",
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// User.sync({ alter: true });

module.exports = User;
