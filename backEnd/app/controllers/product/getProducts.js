const { selectAll } = require("../../models/products");
exports.getProduct = (req, res, next) => {
  try {
    selectAll()
      .then((response) => {
        res.send({
          data: response,
          success: true,
          code: 200,
          message: "success",
        });
      })
      .catch((err) => {
        res.send({
          success: false,
          code: 401,
          message: "error",
        });
      });
  } catch (e) {
    next();
  }
};
