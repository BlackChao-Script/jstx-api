const { basename } = require("path");
const {
  fileUploadTypeError,
  fileUploadError,
} = require("../constant/err.type");
const { BASE_PATH } = require("../constant/data");

class uploadController {
  async uploads() {
    const { file } = ctx.request.files;
    const fileTypes = ["image/jpeg", "image/png"];
    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit("error", fileUploadTypeError, ctx);
      }
      ctx.body = {
        code: 0,
        message: "上传成功",
        result: {
          file_path: BASE_PATH + basename(file.path),
        },
      };
    } else {
      return ctx.app.emit("error", fileUploadError, ctx);
    }
  }
}

module.exports = new uploadController();
