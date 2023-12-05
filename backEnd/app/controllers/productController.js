const { addProduct, selectAll } = require("../models/productModels");
const { errorRequest, successAdd } = require("../services/ResponseStatusCodes");
exports.newProduct = (req, res, next) => {
  try {
    const { title, description, pass, link, price, poster, status } = req.body;
    addProduct([title, description, status, pass, link, price, poster])
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
  } catch (console) {
    next(error);
  }
};
