const TokenService = require("../services/TokenService");
const { selectAllUser } = require("../models/userModels");

exports.verifyToken = (req, res, next) => {
  const data = TokenService.decode(req.headers.authorization);
  res.send({ data, success: true, code: 200, message: "success" });
};
