const connection = require("../../database/mysql");

const selectUser = async (value) => {
  const [rows] = await connection.query(
    "SELECT * FROM `users` WHERE `email`=? AND `is_deleted`=0 LIMIT 1",
    value
  );
  return rows;
};
const selectUserId = async (value) => {
  const [rows] = await connection.query(
    "SELECT * FROM `users` WHERE `id`=? AND `is_deleted`=0",
    value
  );
  return rows;
};
const selectAllUser = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM `users` WHERE `is_deleted`=0"
  );
  return rows;
};
const deleteUser = async (id) => {
  const [rows] = await connection.query(
    "UPDATE `users` SET `is_deleted`=1 WHERE `id`=?",
    id
  );
  // const [rows] = await connection.query("DELETE FROM `users` WHERE id=?", id);
  return rows;
};

const changeStatus = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `users` SET `status`=? WHERE id=?",
    value
  );
  return rows;
};
const updateUserInfo = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `users` SET `picture`=? `phone`=? `email`=? WHERE id=?",
    value
  );
  return rows;
};
const updateUserPassword = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `users` SET `password`=? WHERE id=?",
    value
  );
  return rows;
};

module.exports = {
  selectUser,
  selectAllUser,
  deleteUser,
  changeStatus,
  updateUserInfo,
  updateUserPassword,
  selectUserId,
};
