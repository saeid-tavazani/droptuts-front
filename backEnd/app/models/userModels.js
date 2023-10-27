const connection = require("../../database/mysql");

const selectAllUser = async () => {
  const [rows, filds] = await connection.query("SELECT * FROM `use`");
  //   console.log("====================================");
  //   console.log(rows);
  //   console.log("====================================");
  return rows;
};

module.exports = {
  selectAllUser,
};
