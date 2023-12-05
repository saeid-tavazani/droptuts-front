const { addProduct } = require("../models/productModels");
const { errorRequest, successNot } = require("../services/ResponseStatusCodes");
exports.newProduct = (req, res, next) => {
  try {
    const { title, password, phone, name, family } = req.body;

    addProduct([email, phone])
      .then((user) => {
        if (user) {
          //   res.send((errorRequest.message = "user already exists"));
        } else {
          //   newUser([name, family, email, generateHashPss(password), phone]).then(
          //     (row) => {
          //       if (row.affectedRows) {
          //         res.send(successNot);
          //       }
          //     }
          //   );
        }
      })
      .catch((error) => {
        res.send(errorRequest);
      });
  } catch (console) {
    next(error);
  }
};
