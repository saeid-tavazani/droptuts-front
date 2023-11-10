const connection = require("../../database/mysql");

const selectAll = async () => {
  const [rows] = await connection.query(
    "SELECT `products`.`id`, `products`.`title`, `products`.`description`, `products`.`price`, `products`.`poster`, `products`.`status`, `products`.`active`,  `products`.`create_at`, `products`.`update_at`, `products`.`discount` ,users.full_name AS author FROM `products` INNER JOIN `users` ON products.author_id = users.id"
  );
  return rows;
};

const selectAllActive = async () => {
  const [rows] = await connection.query(
    "SELECT `products`.`id`, `products`.`title`, `products`.`description`, `products`.`price`, `products`.`poster`, `products`.`status`, `products`.`active`,  `products`.`create_at`, `products`.`update_at`, `products`.`discount` ,users.full_name AS author FROM `products` INNER JOIN `users` ON products.active=1 AND products.author_id = users.id"
  );
  return rows;
};

const select = async (value) => {
  const [rows] = await connection.query(
    "SELECT `products`.`id`, `products`.`title`, `products`.`description`, `products`.`price`, `products`.`poster`, `products`.`status`, `products`.`active`,  `products`.`create_at`, `products`.`update_at`, `products`.`discount` ,users.full_name AS author FROM `products` INNER JOIN `users` ON products.active=1 AND products.id=? AND products.author_id = users.id",
    value
  );
  return rows;
};

const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`( `title`, `description`, `price`, `poster`, `active`, `author_id`,`discount`) VALUES (?,?,?,?,?,?,?,?)",
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
    "UPDATE `products` SET `title`=?,`description`=?,`price`=?,`poster`=?,`status`=?,`author_id`=?,`update_at`=?,`discount`=? WHERE id=?",
    value
  );
  return rows;
};

module.exports = {
  selectAll,
  updateProduct,
  softDeleteProduct,
  addProduct,
  select,
};
