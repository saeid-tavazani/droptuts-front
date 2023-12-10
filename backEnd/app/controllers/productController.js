const {
  addProduct,
  selectAll,
  selectPassword,
} = require("../models/productModels");
const {
  errorRequest,
  successAdd,
  success,
} = require("../services/ResponseStatusCodes");
exports.newProduct = (req, res, next) => {
  try {
    const { title, description, discount, pass, link, price, poster, status } =
      req.body;
    addProduct([
      title,
      description,
      status,
      pass,
      link,
      price,
      discount,
      poster,
    ])
      .then((user) => {
        if (user.affectedRows) {
          selectAll().then((row) => {
            res.send({ ...successAdd, data: row });
          });
        } else {
          res.send(errorRequest);
        }
      })
      .catch((error) => {
        res.send(errorRequest);
      });
  } catch (error) {
    next(error);
  }
};

exports.selectAllProduct = (req, res, next) => {
  try {
    selectAll()
      .then((rows) => {
        res.send({ ...success, data: rows });
      })
      .catch((error) => {
        res.send(errorRequest);
      });
  } catch (console) {
    next(error);
  }
};

exports.selectPassword = (req, res, next) => {
  try {
    selectPassword()
      .then((rows) => {
        res.send({ ...success, data: rows });
      })
      .catch((error) => {
        res.send(errorRequest);
      });
  } catch (console) {
    next(error);
  }
};
