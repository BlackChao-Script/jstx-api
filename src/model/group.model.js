const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Group = seq.define(
  "jstx_Group",
  {
    groupmast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "群主id",
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "群名",
    },
    group_cover: {
      type: DataTypes.STRING,
      comment: "群封面",
    },
    group_affiche: {
      type: DataTypes.STRING,
      comment: "群公告",
    },
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: true, // 是否开启时间戳
    createdAt: "groupcreate_time", // 自定义创建时的时间戳
    updatedAt: false, // 关闭更新时间戳
  }
);

// Group.sync({ alter: true });

module.exports = Group;
