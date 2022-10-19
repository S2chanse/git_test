const fs = require("fs");
const createReadStream = fs.createReadStream("./readme.txt", {
  highWaterMark: 16,
});

const createWriteStream = fs.createWriteStream("./writeme.txt");
//읽어서 => 쓴다.
createReadStream.pipe(createWriteStream);
