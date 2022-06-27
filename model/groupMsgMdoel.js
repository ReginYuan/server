var mongoose = require("mongoose");
var db = require("../config/db");
var Schema = mongoose.Schema;

//群消息表
var GroupMsgSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: "Group" }, //群id
  userID: { type: Schema.Types.ObjectId, ref: "User" }, //用户id
  message: { type: String }, //内容
  types: { type: String }, //内容类型（0文字，1图片链接，2音频链接...)
  time: { type: Date } //发送时间
});

module.exports = db.model("GroupMsg", GroupMsgSchema);
