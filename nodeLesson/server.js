// var http = require("http");
// var uc = require("upper-case");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.write(req.url);
//     res.write(uc("hellow world"));
//     res.end();
//   })
//   .listen(8080);

var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.listen(2000, function() {
  console.log(`server started on port 2000`);
});
