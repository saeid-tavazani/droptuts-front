const connection = require("../../database/mysql");

const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`(`title`, `description`, `status`, `pass_file`, `link`, `price` , `discount` , `poster`) VALUES (?,?,?,?,?,?,?,?)",
    value
  );
  return rows;
};

const selectAll = async () => {
  const [rows] = await connection.query(
    "SELECT products.id, products.title, products.description, products.status, products.link, products.price , products.discount , products.poster, products.create_at, products.update_at ,password_files.password FROM products INNER JOIN password_files ON products.pass_file = password_files.id WHERE NOT status='deleted';"
  );
  return rows;
};

const select = async () => {
  const [rows] = await connection.query(
    "SELECT products.id, products.title, products.description, products.status, products.link, products.price , products.discount , products.poster, products.create_at, products.update_at ,password_files.password FROM products INNER JOIN password_files ON products.pass_file = password_files.id WHERE status='active';"
  );
  return rows;
};

const selectPassword = async () => {
  const [rows] = await connection.query("SELECT * FROM `password_files`");
  return rows;
};

module.exports = {
  addProduct,
  selectAll,
  selectPassword,
  select,
};
