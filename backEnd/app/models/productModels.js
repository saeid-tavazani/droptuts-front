const connection = require("../../database/mysql");

const selectAll = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM `products` WHERE `active`!='deleted' AND category='course'"
  );
  return rows;
};

const selectActive = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM `products` WHERE `active`='active' AND category='course'"
  );
  return rows;
};

const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`( `title`, `description`, `price`, `poster`, `status`, `active`, `author_id`, `discount`, `category`) VALUES (?,?,?,?,?,?,?,?,?)",
    value
  );
  return rows;
};

const softDeleteProduct = async (value) => {
  const [rows] = await connection.query(
    "UPDATE `products` SET `active`='deleted' WHERE id=?",
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
