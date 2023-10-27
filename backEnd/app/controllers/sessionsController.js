const TokenService = require("../services/TokenService");
const { selectAllUser } = require("../models/userModels");
exports.newSession = (req, res, next) => {
  try {
    selectAllUser()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({
          success: false,
        });
      });
  } catch (error) {
    next(error);
  }
};
