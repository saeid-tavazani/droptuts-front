var passwordHash = require("password-hash");
const {
  updateUserPassword,
  updateUserPicture,
  selectUserId,
} = require("../../models/userModels");

exports.updateUser = (req, res, next) => {
  try {
    const { currentPassword, password, phone, picture, id } = req.body;

    updateUserPicture([picture, id])
      .then((rows) => {
        if (rows.changedRows) {
          res.send({ success: true, code: 200, message: "success" });
        } else {
          res.send({
            success: false,
            code: 404,
            message: "user not found!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: "error",
          code: 401,
          message: "password not valid",
          success: false,
        });
      });

    if (password.length) {
      if (password.length < 8) {
        selectUserId([id]).then((user) => {
          if (
            passwordHash.verify(currentPassword, user[0].password) &&
            passwordHash.isHashed(currentPassword) == false
          ) {
            updateUserPassword([passwordHash.generate(password), id]).then(
              (rows) => {
                if (rows.changedRows) {
                  res.send({ success: true, code: 200, message: "success" });
                } else {
                  res.send({
                    success: false,
                    code: 404,
                    message: "user not found!",
                  });
                }
              }
            );
          } else {
            res.send({
              status: "error",
              code: 401,
              message: "password not valid",
              success: false,
            });
          }
        });
      } else {
        res.send({
          status: "error",
          code: 401,
          message: "The password must be at least 8 RAM",
          success: false,
        });
      }
    }
  } catch (e) {
    next();
  }
};
