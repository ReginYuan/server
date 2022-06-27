var usersModel = require("../model/userModel");
var Users = usersModel.model("Users");
var bcrypt = require("./bcrypt");
var jwt = require('../config/jwt')
//查询用户
exports.findUser = function (res) {
  Users.find(function (err, val) {
    if (err) {
      console.log("用户数据查找失败！" + err);
    } else {
      res.send(val);
    }
  });
};

//新建用户
exports.buildUser = function (name, email, pwd, res) {
  //密码加密
  let password = bcrypt.encryotion(pwd);
  let data = {
    name: name,
    email: email,
    pwd: password,
    time: new Date()
  };
  let users = new Users(data);
  users.save(function (err, result) {
    if (err) {
      res.send({ status: 500 });
    } else {
      res.send({ status: 200 });
    }
  });
};

//匹配用户表元素个数
exports.countUserValue = function (data, type, res) {
  let wherestr = {};
  //wherestr= {'type':data}
  wherestr[type] = data;
  Users.countDocuments(wherestr, function (err, result) {
    if (err) {
      res.send({ status: 500 });
    } else {
      res.send({ status: 200, result });
    }
  });
};

exports.userMatch = function (data, pwd, res) {
  let wherestr = { $or: [{ name: data }, { email: data }] };
  let out = { name: 1, imgurl: 1, pwd: 1 };

  Users.find(wherestr, out, function (err, result) {
    if (err) {
      res.send({ status: 500 });
    } else {
      if (result == "") {
        res.send({status:400})
      }
      result.map(function (e) {
        const pwdMatch = bcrypt.verification(pwd, e.pwd)
        if (pwdMatch) {
          let token = jwt.verifyToken(pwd)
          let back = {
            name: e.name,
            imgurl:e.imgurl
          }
        }
      })
    }
  });
};
