const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// 设置跨域和相应数据格式
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
	res.setHeader('Content-Type', 'application/json;charset=utf-8')
	res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
	res.header('X-Powered-By', ' 3.2.1')
	if (req.method == 'OPTIONS') {
 		/*让options请求快速返回*/
		res.sendStatus(200)
	} else {
		next()
	}
})


//解析前端数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
require("./router/index")(app);

// 404找不到页面或者资源找不到页面
app.use(function (req, res, next) {
  let err = new Error("not Found");
  err.status = 404;
  next(err);
});

//500服务器相应失败
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
  next(err);
});

app.listen(port, () => {
  console.log(`您已经启动端口 ${port}`);
  console.log(`http://127.0.0.1:${port}`);
});
