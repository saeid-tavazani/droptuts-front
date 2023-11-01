const { updateUserInfo } = require("../../models/userModels");

exports.updateUserInfo = (req, res, next) => {
  try {
    const { phone, picture, email, id } = req.body;

    updateUserInfo([picture, phone, email, id])
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
  } catch (e) {
    next();
  }
};
