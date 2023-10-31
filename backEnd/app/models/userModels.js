const connection = require("../../database/mysql");

const selectUser = async (value) => {
  const [rows] = await connection.query(
    "SELECT * FROM `users` WHERE `email`=? LIMIT 1",
    value
  );
  return rows;
};

const selectAllUser = async () => {
  const [rows, filds] = await connection.query("SELECT * FROM `users`");
  return rows;
};

module.exports = {
  selectUser,
  selectAllUser,
};
