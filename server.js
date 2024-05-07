const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

const testReadFile = (res) => {
  // fs.readFile("./index.html", "utf8", (err, data) => {
  //   res.end(data);
  // });
  fs.readdir("src/test.js", (err, dirs) => {
    res.end(dirs);
  });
};

const server = http.createServer((req, res) => {
  // res.write(req.url);
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.write(`<h1>hello</h1>`);
  // res.end(`bye`);
  testReadFile(res);
});

server.listen(port, () => {});
