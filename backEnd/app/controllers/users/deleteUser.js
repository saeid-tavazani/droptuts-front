const { deleteUser, selectAllUser } = require("../../models/userModels");

exports.deleteUsers = (req, res, next) => {
  const id = req.params.id;

  deleteUser([id])
    .then((rows) => {
      if (rows.affectedRows) {
        selectAllUser()
          .then((users) => {
            users.map((user) => {
              delete user.password;
            });
            res.send({
              data: users,
              success: true,
              code: 200,
              message: "success",
            });
          })
          .catch((err) => {
            return res.status(401).send({
              status: "error",
              code: 401,
              message: "user !?",
              success: false,
            });
          });
      } else {
        res.send({
          success: false,
          code: 404,
          message: "user not found!",
        });
      }
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
