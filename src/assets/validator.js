import validator from "validator";

export function isEmail(value) {
  return validator.isEmail(validator.trim(value));
}
export function isPassword(value) {
  return validator.isLength(validator.trim(value), { max: 16, min: 8 });
}
