const { updateUserPassword, selectUserId } = require("../../models/userModels");
const { verifyPass, generateHashPss } = require("../../services/PasswordHash");
exports.updateUserPass = (req, res, next) => {
  try {
    const { currentPassword, password, id } = req.body;

    if (password.length > 0 && password.length < 8) {
      selectUserId([id])
        .then((user) => {
          if (verifyPass(currentPassword, user[0].password)) {
            updateUserPassword([generateHashPss(password), id]).then((rows) => {
              if (rows.changedRows) {
                res.send({ success: true, code: 200, message: "success" });
              } else {
                res.send({
                  success: false,
                  code: 404,
                  message: "user not found!",
                });
              }
            });
          } else {
            res.send({
              status: "error",
              code: 401,
              message: "password not valid",
              success: false,
            });
          }
        })
        .catch((error) => {
          res.send({
            status: "error",
            code: 401,
            message: "error ?!",
            success: false,
          });
        });
    } else {
      res.send({
        status: "error",
        code: 401,
        message: "The password must be at least 8 RAM",
        success: false,
      });
    }
  } catch (e) {
    next();
  }
};
