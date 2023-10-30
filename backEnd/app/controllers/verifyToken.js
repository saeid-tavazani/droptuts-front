const TokenService = require("../services/TokenService");
const { selectAllUser } = require("../models/userModels");

exports.verifyToken = (req, res, next) => {
  const data = TokenService.decode(req.headers.authorization);
  selectAllUser(data.email).then((user) => {
    if (user[0].status == 1) {
      res.send({ data, success: true, code: 200, message: "success" });
    } else {
      return res.status(401).send({
        status: "error",
        code: 401,
        message: "Inactive user",
        success: false,
      });
    }
  });
};
