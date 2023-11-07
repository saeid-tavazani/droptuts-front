const {
  updateUserPassword,
  selectUserId,
  updateUserInfo,
  selectAllUser,
  deleteUser,
  changeStatus,
} = require("../models/userModels");

const { verifyPass, generateHashPss } = require("../services/PasswordHash");

exports.updateUserPass = (req, res, next) => {
  try {
    const { currentPassword, password, id } = req.body;

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
  } catch (e) {
    next();
  }
};

exports.updateUserInfo = (req, res, next) => {
  try {
    const { phone, picture, email, id } = req.body;
    updateUserInfo([picture, email, phone, Number(id)])
      .then((rows) => {
        if (rows.affectedRows) {
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
          message: "info not valid",
          success: false,
        });
      });
  } catch (e) {
    next();
  }
};

exports.users = (req, res, next) => {
  try {
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
  } catch (e) {
    next();
  }
};

exports.deleteUsers = (req, res, next) => {
  try {
    const id = req.body.id;

    deleteUser([id])
      .then((rows) => {
        if (rows.affectedRows) {
          selectAllUser().then((users) => {
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
  } catch (e) {
    next();
  }
};

exports.editStatus = (req, res, next) => {
  try {
    const { id, status } = req.body;

    changeStatus([status == 1 ? 0 : 1, id])
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
        return res.send({
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
