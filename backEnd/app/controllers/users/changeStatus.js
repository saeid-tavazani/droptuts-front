const { changeStatus, selectAllUser } = require("../../models/userModels");

exports.editStatus = (req, res, next) => {
  try {
    const { id, status } = req.body;

    changeStatus([Number(!status), id])
      .then((rows) => {
        if (rows.changedRows) {
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
  } catch (e) {
    next();
  }
};
