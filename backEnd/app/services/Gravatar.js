const gravatar = require("gravatar");
exports.gravatar = (email) => {
  let picture = gravatar.url(email);
  picture == "//www.gravatar.com/avatar/b9bc524123557af3b8e334486274513f"
    ? (picture = null)
    : picture;
  return { picture };
};
