const sessionRouter = require("./sessions");
const users = require("./users");
const auth = require("../middlewares/auth");
const products = require("./products");

module.exports = (app) => {
  app.use("/app/admin/api/v1/session", sessionRouter);
  app.use("/app/admin/api/v1/users", [auth], users);
  app.use("/app/admin/api/v1/products", [auth], products);
};
