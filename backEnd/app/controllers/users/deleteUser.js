const { deleteUser, selectAllUser } = require("../../models/userModels");

exports.deleteUsers = (req, res, next) => {
  try {
    const id = req.params.id;
    if (id != undefined && id != "") {
      deleteUser([id])
        .then((rows) => {
          if (rows.affectedRows) {
            selectAllUser().then((users) => {
              users.map((user) => {
                delete user.password;
              });
              res.send({
                data: users,
                success: true,
                code: 200,
                message: "success",
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
    }
    res.send({
      success: false,
      code: 401,
      message: "id fields are mandatory",
    });
  } catch (e) {
    next();
  }
};
