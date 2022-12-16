const {
  fileUploadTypeError,
  fileUploadError,
} = require("../constant/err.type");
const { BASE_PATH } = require("../constant/data");

class uploadController {
  async uploads(ctx) {
    const { file } = ctx.request.files;
    console.log(file)

    const fileTypes = ["image/jpeg", "image/png"];
    if (file) {
      console.log(file);
      if (!fileTypes.includes(file.mimetype)) {
        return ctx.app.emit("error", fileUploadTypeError, ctx);
      }
      ctx.body = {
        code: 0,
        message: "上传成功",
        result: {
          file_path: BASE_PATH + file.newFilename,
        },
      };
    } else {
      return ctx.app.emit("error", fileUploadError, ctx);
    }
  }
}

module.exports = new uploadController();
