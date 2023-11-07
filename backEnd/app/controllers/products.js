const { selectAll, addProduct } = require("../models/products");
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

exports.addProduct = (req, res, next) => {
  let { author_id, description, title } = req.body;
  let body = req.body;
  // poster,
  // price,
  // active,
  // headlines,
  // discount,

  addProduct([
    title,
    description,
    body.price ? body.price : "NULL",
    body.poster ? body.poster : "NULL",
    body.active ? body.active : "NULL",
    author_id,
    body.headlines ? body.headlines : "NULL",
    body.discount ? body.discount : "NULL",
  ]);
};
