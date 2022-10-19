const fs = require("fs");
const writeStrem = fs.createWriteStream("./writeStrem2.txt");
writeStrem.on("finish", () => {
  //read의 end와 대응된다.
  console.log("완료");
});

//writeStream.end()=>finish를 탄다.
