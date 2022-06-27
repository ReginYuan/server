//引用发送邮件插件
var nodemailer = require("nodemailer");
//引入证书文件
var credentials = require("../config/credentials");

//创建传输方式
var transporter = nodemailer.createTransport({
  service: "qq",
  auth: {
    user: credentials.qq.user,
    pass: credentials.qq.pass
  }
});

exports.emailSignUp = function (email, res) {
  //发送信息内容
  let options = {
    from: "2496943860@qq.com",
    to: email,
    subject: "感谢您在灯火注册",
    html: '<span>灯火欢迎您的加入</span><a href="http://localhost:8080">点击</a>'
  };
  //发送邮件
  transporter.sendMail(options, function (err, msg) {
    if (err) {
      res.send("邮件发送失败");
    } else {
      res.send("邮件发送成功！");
    }
  });
};
