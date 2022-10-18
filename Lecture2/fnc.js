const { odd, even } = require("./var");

function checkOddOrEven(num) {
  return num % 2 ? odd : even;
}
//module.exports file에서 단 한번 사용 가능
module.exports = checkOddOrEven;
