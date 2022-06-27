var mongoose = require("mongoose");
var db = require("../config/db");
var Schema = mongoose.Schema;

//群成员表
var GroupUserSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: "Group" }, //群id
  userID: { type: Schema.Types.ObjectId, ref: "User" }, //用户id
  name: { type: String }, //群内名称
  tip: { type: Number, default: 0 }, //未读消息数
  time: { type: Date }, //加入时间
  lastTime: { type: Date }, //最后通讯时间（后加入项）
  shield: { type: Number, default: 0 } //是否屏蔽群消息（0不屏蔽，1屏蔽）
});

module.exports = db.model("GroupUser", GroupUserSchema);
