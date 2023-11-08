const connection = require("../../database/mysql");

const selectAll = async () => {
  const [rows] = await connection.query(
    "SELECT `products`.`id`, `products`.`title`, `products`.`description`, `products`.`Price`, `products`.`poster`, `products`.`status`, `products`.`active`, `products`.`headlines`, `products`.`create_at`, `products`.`update_at`, `products`.`discount` ,users.full_name AS author FROM `products` INNER JOIN `users` ON products.author_id = users.id"
  );
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
    "INSERT INTO `products`( `title`, `description`, `Price`, `poster`, `active`, `author_id`, `headlines`,`discount`) VALUES (?,?,?,?,?,?,?,?,?)",
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
    "UPDATE `products` SET `title`=?,`description`=?,`Price`=?,`poster`=?,`status`=?,`author_id`=?,`headlines`=?,`update_at`=?,`discount`=? WHERE id=?",
    value
  );
  return rows;
};

module.exports = {
  selectAll,
  updateProduct,
  softDeleteProduct,
  addProduct,
  selectActive,
};
