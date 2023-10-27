const jwt = require("jsonwebtoken");

exports.sing = (data) => {
  return jwt.sign(data, process.env.APP_SECRET);
};

exports.verify = (token) => {
  try {
    const paylod = jwt.verify(token, process.env.APP_SECRET);
    return paylod;
  } catch (error) {
    return false;
  }
};

exports.decode = (token) => {
  return jwt.decode(token, process.env.APP_SECRET);
};
