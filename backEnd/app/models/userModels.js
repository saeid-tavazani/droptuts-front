const connection = require("../../database/mysql");

const selectUserActive = async (value) => {
  const [rows] = await connection.query(
    "SELECT `id`, CONCAT(`first_name`,' ', `last_name`) AS name, `email`, `password`, `role`, `create_at`, `phone`, `status` FROM `users` WHERE `email`=? AND `status`='active' LIMIT 1",
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
    "SELECT id FROM `users` WHERE `email`=? OR phone=?",
    value
  );
  return rows;
};

module.exports = {
  selectUserActive,
  newUser,
  selectuser,
};
