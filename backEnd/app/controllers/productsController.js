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
    let { id, description, title } = req.body;
    let body = req.body;
    addProduct([
      title,
      description,
      body.price ? body.price : "NULL",
      body.poster ? body.poster : "NULL",
      Number(id),
      body.discount ? body.discount : "NULL",
      body.headings
        ? body.headings
        : JSON.stringify([
            { time: 20, isFree: true, name: "test1", url: "http://" },
          ]),
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

exports.editProduct = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
