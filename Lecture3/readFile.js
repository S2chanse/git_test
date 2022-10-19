/*const fs = require("fs");
fs.readFile("../README.md", (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
});*/
const fs = require("fs").promises;
/*fs.readFile("../README.md")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });*/

fs.writeFile("./writeme.txt", "Write Me text")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
