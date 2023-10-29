var passwordHash = require("password-hash");
const TokenService = require("../services/TokenService");
const { selectAllUser } = require("../models/userModels");

exports.newSession = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (
      email != undefined &&
      password != undefined &&
      email != "" &&
      password != ""
    ) {
      selectAllUser([email])
        .then((user) => {
          if (
            user.length &&
            passwordHash.verify(password, user[0].password) &&
            passwordHash.isHashed(password) == false
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
          res.send({ code: 501 });
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
