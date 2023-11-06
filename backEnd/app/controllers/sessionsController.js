const TokenService = require("../services/TokenService");
const { verifyPass } = require("../services/PasswordHash");
const { selectUser } = require("../models/userModels");

exports.newSession = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (
      email != undefined &&
      password != undefined &&
      email != "" &&
      password != ""
    ) {
      selectUser([email])
        .then((user) => {
          if (
            user.length &&
            verifyPass(password, user[0].password) &&
            user[0].status == 1
          ) {
            delete user[0].password;
            res.send({
              data: user[0],
              success: true,
              code: 200,
              message: "success",
              token: TokenService.sing(user[0]),
            });
          } else {
            res.send({
              success: false,
              message: "Email or password is incorrect !?",
              code: 401,
            });
          }
        })
        .catch((err) => {
          res.send({ code: 501, success: false });
        });
    } else {
      res.send({
        success: false,
        code: 401,
        message: "Password and email fields are mandatory",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.verifyToken = (req, res, next) => {
  try {
    const data = TokenService.decode(req.headers.authorization);
    selectUser(data.email).then((user) => {
      if (user[0].status == 1) {
        delete user[0].password;
        res.send({
          data: user[0],
          success: true,
          code: 200,
          message: "success",
        });
      } else {
        return res.status(401).send({
          status: "error",
          code: 401,
          message: "Inactive user",
          success: false,
        });
      }
    });
  } catch (e) {
    next();
  }
};
