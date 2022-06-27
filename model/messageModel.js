var mongoose = require("mongoose");
var db = require("../config/db");
var Schema = mongoose.Schema;

//一对一消息表
var MessageSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" }, //用户id
  friendID: { type: Schema.Types.ObjectId, ref: "User" }, //好友id
  message: { type: String }, //内容
  types: { type: String }, //内容类型（0文字，1图片链接，2音频链接,3地图)
  time: { type: Date }, //发送时间
  state: { type: Number } //消息状态（0已读，1未读）
});

module.exports = db.model("Message", MessageSchema);
