var mongoose = require("mongoose");
var db = require("../config/db");
var Schema = mongoose.Schema;

//用户表
var UserSchema = new Schema({
  name: { type: String }, //用户名
  psw: { type: String }, //密码
  email: { type: String }, //邮箱
  sex: { type: String, default: "asexual" }, //性别
  birth: { type: Date }, //生日
  phone: { type: Number }, //电话
  explain: { type: String }, //介绍
  imgurl: { type: String, default: "/user/user.png" }, //用户头像
  time: { type: Date } //注册时间
});

module.exports = db.model("Users", UserSchema);
