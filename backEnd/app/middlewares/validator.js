const { validationResult, ValidationChain } = require("express-validator");

module.exports = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      errors: errors.array(),
      status: "error",
      message: "not valid!",
      success: false,
    });
  };
};