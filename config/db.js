var mongoose = require("mongoose");
var db = mongoose.createConnection("mongodb://localhost:27017/denghuo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.info("数据库denghuo 打开成功!");
});

module.exports = db;
