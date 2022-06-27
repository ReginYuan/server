var mongoose = require("mongoose");
var db = require("../config/db");
var Schema = mongoose.Schema;

//好友表
var FriendSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" }, //用户id
  friendID: { type: Schema.Types.ObjectId, ref: "User" }, //好友id
  state: { type: String }, //好友状态（0已为好友，1申请中，2申请发送方）
  markname: { type: String }, //好友昵称
  time: { type: Date }, //生成时间
  lastTime: { type: Date } //最后通讯时间（后加入项）
});

module.exports = db.model("Friend", FriendSchema);
