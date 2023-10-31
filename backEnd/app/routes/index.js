const sessionRouter = require("./sessions");
const usersPanel = require("./usersPanel");
const auth = require("../middlewares/auth");

module.exports = (app) => {
  app.use("/app/admin/api/v1/session", sessionRouter);
  app.use("/app/admin/api/v1/users", [auth], usersPanel);
};
