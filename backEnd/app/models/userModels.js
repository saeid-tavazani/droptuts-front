const connection = require("../../database/mysql");

const selectUser = async (value) => {
  const [rows] = await connection.query(
    "SELECT * FROM `users` WHERE `email`=? LIMIT 1",
    value
  );
  return rows;
};
const selectAllUser = async () => {
  const [rows] = await connection.query("SELECT * FROM `users`");
  return rows;
};
const deleteUser = async (id) => {
  const [rows] = await connection.query("DELETE FROM `users` WHERE id=?", id);
  return rows;
};
const changeStatus = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `users` SET `status`=? WHERE id=?",
    value
  );
  console.log("====================================");
  console.log(rows);
  console.log("====================================");
  return rows;
};

module.exports = {
  selectUser,
  selectAllUser,
  deleteUser,
  changeStatus,
};
