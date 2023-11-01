const { changeStatus, selectAllUser } = require("../../models/userModels");

exports.editStatus = (req, res, next) => {
  try {
    const { id, status } = req.body;
    if (id != undefined && status != undefined && id != "" && status != "") {
      changeStatus([Number(!status), id])
        .then((rows) => {
          if (rows.changedRows) {
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
          return res.send({
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
      message: "id and status fields are mandatory",
    });
  } catch (e) {
    next();
  }
};
