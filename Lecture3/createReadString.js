const fs = require("fs");
//readStream 64kbyte 가능
//Stream의 경우 buffer 보다 메모리 사용에 효율적이다.
const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 });

const data = new Array();
readStream.on("data", (chunk) => {
  console.log(chunk);
  data.push(chunk);
});

readStream.on("end", () => {
  console.log("end", Buffer.concat(data).toString());
});

readStream.on("error", (error) => {
  console.log(error);
});
