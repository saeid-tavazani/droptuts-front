const connection = require("../../database/mysql");

const selectAllUser = async (value) => {
  const [rows, filds, ...res] = await connection.query(
    "SELECT * FROM `users` WHERE `email`=? AND `password`=?",
    value
  );
  return rows;
};

module.exports = {
  selectAllUser,
};
