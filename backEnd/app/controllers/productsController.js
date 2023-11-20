const {
  selectAll,
  addProduct,
  selectActive,
} = require("../models/productModels");
const {
  success,
  errorRequest,
  successAdd,
} = require("../services/ResponseStatusCodes");
exports.getProductAll = (req, res, next) => {
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
exports.getProductActive = (req, res, next) => {
  try {
    selectActive()
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
    const {
      id,
      title,
      category,
      description,
      status,
      price,
      poster,
      discount,
    } = req.body;

    addProduct([title, description, price, poster, status])
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

exports.editProduct = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
