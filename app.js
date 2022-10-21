const express = require("express");
const { restart } = require("nodemon");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
//1
const app = express();

app.set("port", process.env.PORT | 3000);
//미들웨어 역할 head 컨트롤러 보단 말그대로 미들웨어 중간 단계에서 테스트
app.use(morgan("dev"));
//요청경로
//app.use(`${요청경로}`, express.static(`${실제경로}`));
app.use("/test", express.static("public"));
app.use(cookieParser("test"));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "test",
    cookie: {
      httpOnly: true,
    },
    name: "connect.sid",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //true qs, false면 queryString 모듈을 사용
/*app.use(
  "/test",
  (req, res, next) => {
    console.log("모든요청 실행");
    next();
  },
  (req, res, next) => {
    try {
      console.log("2");
      next();
    } catch (error) {
      next(error);
    }
  }
);*/
app.get("/", (req, res) => {
  res.cookie("connect.sid", encodeURIComponent(), {
    expires: new Date(),
    httpOnly: true,
    path: "/",
  });
  res.send("Hello World");
});
app.get("/test/test0", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});
app.get("/test/test2", (req, res) => {
  console.log("시험중입니다.");
  res.json({ test: "test" });
  console.log(`${req.url}`);
});

//에러처리 미들웨어
app.use((err, req, res, next) => {
  // console.log(res.status);
  console.error(err);
});

app.listen(app.get("port"), () => {
  console.log("Express Server on");
});
