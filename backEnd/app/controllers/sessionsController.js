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
      selectAllUser([email, password])
        .then((user) => {
          if (user.length) {
            res.send({
              data: user[0],
              success: false,
              code: 200,
              message: "success",
              token: TokenService.sing(
                {
                  exp: Math.floor(Date.now() / 1000) + 2 * 24 * 60 * 60 * 1000,
                  data: user[0],
                },
                "secret"
              ),
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
