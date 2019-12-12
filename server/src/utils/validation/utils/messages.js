const INVALID = 'INVALID';
const LENGTH = 'LENGTH';
const REQUIRED = 'REQUIRED';
const INFO = 'INFO';
const MATCH = 'MATCH';

function generate({ field, min, max }) {
  return {
    [LENGTH]: `The ${field} must be ${min}-${max} characters long`,
    [REQUIRED]: `The ${field} is required`,
    [INVALID]: `The ${field} is invalid`,
  }
}

module.exports = {
  INVALID,
  LENGTH,
  REQUIRED,
  INFO,
  MATCH,

  generate
}

