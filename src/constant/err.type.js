module.exports = {
  // 用户错误
  userFormateError: {
    code: "10001",
    message: "用户名或密码为空",
    result: "",
  },
  userAlreadyExited: {
    code: "10002",
    message: "用户名已存在",
    result: "",
  },
  userRegisterError: {
    code: "10003",
    message: "获取用户信息失败",
    result: "",
  },
  userNotExistence: {
    code: "10004",
    message: "用户名不存在",
    result: "",
  },
  invalidPassword: {
    code: "10005",
    message: "密码错误",
    result: "",
  },
  userLoginError: {
    code: "10007",
    message: "用户登录失败",
    result: "",
  },
  TokenExpiredError: {
    code: "10008",
    message: "token已过期",
    result: "",
  },
  invalidToken: {
    code: "10009",
    message: "无效token",
    result: "",
  },
  getUserInfoError: {
    code: "10019",
    message: "获取用户信息失败",
    result: "",
  },
  changeUserError: {
    code: "10100",
    messahe: "修改用户信息失败",
    result: "",
  },

  // 聊天错误
  getChitchatError: {
    code: "10010",
    message: "获取聊天数据失败",
    result: "",
  },
  sendMessageError: {
    code: "10011",
    message: "发送聊天信息失败",
    result: "",
  },

  // 搜索失败
  searchUsersError: {
    code: "11010",
    message: "搜索失败",
    result: "",
  },

  // 朋友信息错误
  addfriendError: {
    code: "10020",
    message: "添加请求失败",
    result: "",
  },
  friendAlreadyExited: {
    code: "10021",
    message: "好友关系或者申请已存在",
    result: "",
  },
  friendRegisterError: {
    code: "10022",
    message: "获取好友关系或者申请错误",
    result: "",
  },
  getFriendApplyError: {
    code: "10023",
    message: "获取好友申请列表失败",
    result: "",
  },
  changFriendError: {
    code: "10024",
    message: "更新好友状态失败",
    result: "",
  },
  getStateError: {
    code: "10025",
    message: "查询好友状态失败",
    result: "",
  },

  // 群聊错误
  createGroupError: {
    code: "10030",
    message: "创建群聊失败",
    result: "",
  },
  getGroupListError: {
    code: "10031",
    message: "获取群列表数据失败",
    result: "",
  },

  // 获取邮箱验证码失败
  getCodeError: {
    code: "10100",
    message: "获取邮箱验证码失败",
    result: "",
  },

  // 上传错误
  fileUploadTypeError: {
    code: "11100",
    message: "不支持该格式的文件",
    result: "",
  },
  fileUploadError: {
    code: "11101",
    message: "上传失败",
    result: "",
  },
};
