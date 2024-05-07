const http = require("http");
const fs = require("fs");
const path = require("path");

// fs.readFile("./src/js/test5.js", "utf-8", (err, data) => {
//   fs.writeFile(data);
//   console.log(`비동기적 방식: ${data}`);
// });

// const data = "fs 파일 write module test asda";

// // * 파일 생성
// for (let i = 0; i < 5; i++) {
//   fs.writeFile(`./src/js/test${i + 1}.js`, data, "utf8", (err) => {
//     console.log(`비동기적 쓰기(create)asd`);
//   });
// }

// ! 파일 삭제
// for (let i = 0; i < 5; i++) {
//   fs.unlink(`./src/js/test${i}.js`, (err) => {
//     if (err.code === "ENOENT") {
//       console.log("파일이 존재하지 않습니다.");
//     }
//     console.log(`언링크`);
//   });
// }

// *

// fs.rmdir(`testDirectory`, (err) => {
//   console.log(`dir!`);
// });

const testPath = path.join(__dirname, `test1.js`);

const mainDocument = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style = "background-color :red;">ㅎㅇ</h1>
</body>
</html>`;

const server = http.createServer((req, res) => {
  // response.statusCode = 200;
  // response.setHeader("Content-Type", "text/html");
  // response.write(mainDocument);
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node</h1>");
  res.end("<p>Hello Server</p>");
});

server.listen(3000, () => {
  console.log(`dd`);
  console.log(`http://localhost:3000 에서 실행 중`);
});
