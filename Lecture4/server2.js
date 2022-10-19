const http = require("http");
const fs = require("fs").promises;
const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const data = await fs.readFile("../test.html");
      res.end(data);
    } catch (err) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080); //서버 포트 설정
/* .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기 중 입니다.");
  });*/

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중 입니다.");
});
server.on("error", (err) => {
  console.error(err);
});
