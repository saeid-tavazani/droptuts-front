const connection = require("../../database/mysql");

const selectUserActive = async (value) => {
  const [rows] = await connection.query(
    "SELECT `id`, `first_name` AS name, `last_name` AS family, `email`, `password`, `role`, `create_at`, `phone`, `status` FROM `users` WHERE `email`=? AND `status`='active' LIMIT 1",
    value
  );
  return rows[0];
};

const newUser = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `users`(`first_name`, `last_name`, `email`, `password`, `phone`) VALUES (?,?,?,?,?)",
    value
  );
  return rows;
};

const selectuser = async (value) => {
  const [rows] = await connection.query(
    "SELECT id FROM `users` WHERE `email`=? OR phone=? AND `status`='active' LIMIT 1",
    value
  );
  return rows[0];
};

const selectUserId = async (value) => {
  const [rows] = await connection.query(
    "SELECT * FROM `users` WHERE id=? LIMIT 1",
    value
  );
  return rows[0];
};

const updateUser = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `users` SET `first_name`=?,`last_name`=?,`email`=?,`phone`=? WHERE id=?",
    value
  );
  return rows[0];
};

module.exports = {
  selectUserActive,
  newUser,
  selectuser,
  selectUserId,
  updateUser,
};
