const sessionRouter = require("./sessions");
const users = require("./users");
const product = require("./product");

module.exports = (app) => {
  app.use("/app/droptuts/api/v1/session", sessionRouter);
  app.use("/app/droptuts/api/v1/users", users);
  app.use("/app/droptuts/api/v1/product", product);
};
