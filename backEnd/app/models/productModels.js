const connection = require("../../database/mysql");

const selectAll = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM `products` WHERE `active`=1 AND category='course'"
  );
  return rows;
};

const selectActive = async () => {
  const [rows] = await connection.query(
    "SELECT products.id, products.title, products.description, products.price, products.poster, products.status, products.active, products.create_at, products.update_at, products.discount,products.headings, users.full_name AS author FROM products LEFT JOIN users ON products.author_id = users.id AND products.active=1"
  );
  return rows;
};

const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`(`title`, `description`, `price`, `poster`, `author_id`, `discount` ,headings) VALUES (?,?,?,?,?,?,?)",
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
    "UPDATE `products` SET ``title`=?,`description`=?,`price`=?,`poster`=?,`status`=?,`active`=?,`update_at`=?,`discount`=? headings=? WHERE id=?",
    value
  );
  return rows;
};

module.exports = {
  selectAll,
  selectActive,
  updateProduct,
  softDeleteProduct,
  addProduct,
};
