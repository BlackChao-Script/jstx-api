const Group = require("../model/group.model");
const GroupMember = require("../model/groupMember.model");

class groupService {
  async createServiceGroup(data) {
    const GroupData = await Group.create({
      groupmast_id: data.groupmast_id,
      group_name: data.group_name,
    });
    for (let i of data.group_ids) {
      await GroupMember.create({
        group_id: GroupData.dataValues.id,
        user_id: i,
      });
    }
    return GroupData.dataValues;
  }
  async getServiceGroupList(user_id) {
    const res = await GroupMember.findAll({
      where: { user_id },
      include: {
        model: Group,
        as: "group_data",
      },
    });
    return res;
  }
}

module.exports = new groupService();
