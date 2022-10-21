const express = require("express");
const { restart } = require("nodemon");
const path = require("path");

//1
const app = express();

app.set("port",process.env.PORT | 3000);
//미들웨어 역할 head 컨트롤러 보단 말그대로 미들웨어 중간 단계에서 테스트
app.use('/test',(req,res,next)=>{
    console.log("모든요청 실행");
    next();
},(req,res,next)=>{
    console.log("2");
    next();
});
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/test/test0',(req,res)=>{
    res.sendFile(path.join(__dirname,"test.html"));
});
app.get('/test/test2',(req,res)=>{
    console.log("시험중입니다.");
});


//에러처리 미들웨어
app.use((err,req,res,next)=>{
   // console.log(res.status);
    console.error(err);
});

app.listen(app.get('port'),()=>{
    console.log("Express Server on");
});