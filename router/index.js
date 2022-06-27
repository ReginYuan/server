//引入数据表
var userServer = require("../dao/userServer");
//引入邮箱发送方法
var emailServer = require("../dao/emailServer");
//注册页面服务
var register = require("../server/register");

module.exports = function (app) {
  app.get("/test", (req, res) => {
    userServer.findUser(res);
  });
  //邮箱测试
  app.post("/mail", (req, res) => {
    let email = req.body.email;
    emailServer.emailSignUp(email, res);
  });
  //注册页面
  app.post("/register/add", (req, res) => {
    register.register(req, res);
  });
  //验证邮箱
  app.post("/register/verifymailbox", (req, res) => {
    register.judgeValue(req, res);
  });
};
