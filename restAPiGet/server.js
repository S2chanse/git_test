const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "192.168.0.200",
  port: "3306",
  user: "root",
  password: "data2000!",
  database: "tide_api",
});

testQuery = "SELECT * FROM tide_tbl limit 10";
async function test() {
  try {
    var connection = await pool.getConnection();
    var rows = await connection.query(testQuery);
    console.log(JSON.stringify(rows));
    connection.end(); // DB 접속 종료
  } catch (error) {
    console.log(error);
  }
}

test();
