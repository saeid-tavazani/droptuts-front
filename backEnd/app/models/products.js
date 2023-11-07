const connection = require("../../database/mysql");

const selectAll = async () => {
  const [rows] = await connection.query("SELECT * FROM `products`");
  return rows;
};

const selectActive = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM `products` WHERE active=1"
  );
  return rows;
};

const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`( `title`, `description`, `Price`, `poster`, `active`, `author_id`, `headlines`,`discount` ,`time`) VALUES (?,?,?,?,?,?,?,?,?,?)",
    value
  );
  return rows;
};

const softDeleteProduct = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `products` SET `active`=? WHERE id=?",
    value
  );
  return rows;
};

const updateProduct = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `products` SET `title`=?,`description`=?,`Price`=?,`poster`=?,`status`=?,`author_id`=?,`headlines`=?,`update_at`=?,`discount`=? `time`=? WHERE id=?",
    value
  );
  return rows;
};

module.exports = {
  selectAll,
};
