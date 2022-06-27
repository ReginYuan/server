var userServer = require("../dao/userServer");

//用户注册
exports.register = function (req, res) {
  let name = req.body.user;
  let email = req.body.email;
  let pwd = req.body.pwd;
  // console.log(name,email,pwd)
  userServer.buildUser(name, email, pwd, res);
};

//用户或邮箱是否占用判断
exports.judgeValue = function (req, res) {
  let data = req.body.data;
  let type = req.body.type;
  userServer.countUserValue(data, type, res);
};
