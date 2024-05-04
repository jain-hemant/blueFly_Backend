const bcrypt = require("bcrypt");

const encryption = async (data) => {
  const saltRound = 5;
  try {
    return bcrypt.hash(data, saltRound);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = encryption;
