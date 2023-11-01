const { selectAllUser } = require("../../models/userModels");

exports.users = (req, res, next) => {
  selectAllUser()
    .then((users) => {
      users.map((user) => {
        delete user.password;
      });
      res.send({ data: users, success: true, code: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(401).send({
        status: "error",
        code: 401,
        message: "user !?",
        success: false,
      });
    });
};
