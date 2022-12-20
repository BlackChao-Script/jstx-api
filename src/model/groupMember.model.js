const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const Group = require("./group.model");

const GroupMember = seq.define(
  "jstx_GroupMember",
  {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "群id",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "用户id",
    },
    groupInside_name: {
      type: DataTypes.STRING,
      comment: "群内名",
    },
  },
  {
    freezeTableName: true, // 强制表名称等于模型名称
    timestamps: false, // 是否开启时间戳
  }
);

// GroupMember.sync({ alter: true });
// GroupMember.sync({ force: true })


GroupMember.belongsTo(Group, {
  foreignKey: "group_id",
  as: "group_data",
});

module.exports = GroupMember;
