const addProduct = async (value) => {
  const [rows] = await connection.query(
    "INSERT INTO `products`(`title`, `description`, `status`, `pass_file`, `link`, `price`, `poster`, `create_at`, `update_at`) VALUES (?,?,?,?,?,?,?,?,?)",
    value
  );
  return rows;
};

module.exports = {
  addProduct,
};
