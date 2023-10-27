const userRouter = require("./users");
const sessionRouter = require("./sessions");
const auth = require("../middlewares/auth");

module.exports = (app) => {
  app.use("/app/admin/api/v1/users", [auth], userRouter);
  app.use("/app/admin/api/v1/session", sessionRouter);
};
