var mongoose = require("mongoose");
var db = require("../config/db");
var Schema = mongoose.Schema;

//群表
var GroupSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" }, //用户id
  name: { type: String }, //群名称
  imgurl: { type: String, default: "/group/group.png" }, //群头像
  time: { type: Date }, //创建时间
  notice: { type: String } //公告
});

module.exports = db.model("Group", GroupSchema);
