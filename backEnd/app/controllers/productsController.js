const { selectAll, addProduct } = require("../models/productModels");
const {
  success,
  errorRequest,
  successAdd,
} = require("../services/ResponseStatusCodes");
exports.getProduct = (req, res, next) => {
  try {
    selectAll()
      .then((response) => {
        res.send({
          data: response,
          ...success,
        });
      })
      .catch((err) => {
        res.send(errorRequest);
      });
  } catch (error) {
    next(error);
  }
};

exports.addProduct = (req, res, next) => {
  try {
    let { author_id, description, title } = req.body;
    let body = req.body;
    addProduct([
      title,
      description,
      body.price ? body.price : "NULL",
      body.poster ? body.poster : "NULL",
      body.active ? body.active : "NULL",
      author_id,
      body.headlines ? body.headlines : "NULL",
      body.discount ? body.discount : "NULL",
    ])
      .then((result) => {
        selectAll().then((response) => {
          res.send({
            data: response,
            ...successAdd,
          });
        });
      })
      .catch((err) => {
        res.send(errorRequest);
      });
  } catch (error) {
    next(error);
  }
};
