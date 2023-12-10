const connection = require("../../database/mysql");

const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`(`title`, `description`, `status`, `pass_file`, `link`, `price`, `poster`, `create_at`, `update_at`) VALUES (?,?,?,?,?,?,?,?,?)",
    value
  );
  return rows;
};

const selectAll = async () => {
  const [rows] = await connection.query(
    "SELECT `id`, `title`, `description`, `status`, `pass_file`, `link`, `price`, `poster`, `create_at`, `update_at` FROM `products` WHERE NOT `status`='deleted';"
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
};
