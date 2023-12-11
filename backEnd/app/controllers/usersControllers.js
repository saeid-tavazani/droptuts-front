const {
  selectuser,
  newUser,
  selectUserId,
  updateUser,
} = require("../models/userModels");
const logger = require("../services/errorLogger");
const TokenService = require("../services/TokenService");

const {
  errorRequest,
  successNot,
  notEdited,
} = require("../services/ResponseStatusCodes");
const { generateHashPss, verifyPass } = require("../services/PasswordHash");
exports.newUser = (req, res, next) => {
  try {
    const { email, password, phone, name, family } = req.body;
    selectuser([email, phone])
      .then((user) => {
        if (user) {
          res.send((errorRequest.message = "user already exists"));
        } else {
          newUser([name, family, email, generateHashPss(password), phone]).then(
            (row) => {
              if (row.affectedRows) {
                res.send(successNot);
              }
            }
          );
        }
      })
      .catch((error) => {
        res.send(errorRequest);
      });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.editUser = (req, res, next) => {
  try {
    const { email, phone, name, family, id } = req.body;
    selectUserId([id])
      .then((user) => {
        const tokenData = TokenService.decode(req.headers.authorization);
        if (user && user.email === tokenData.email) {
          updateUser([
            name,
            family,
            email,
            // password ? password : user.password,
            phone,
            id,
          ]).then((row) => {
            res.send(successNot);
          });
        } else {
          res.send(notEdited);
        }
      })
      .catch((error) => {
        res.send(errorRequest);
      });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
