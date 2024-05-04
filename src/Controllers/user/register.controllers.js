const UserModel = require("../../Models/user.model");
const encryption = require("../../lib/bcrypt.lib");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !password) {
      return res.status(403).json({ message: "All field is required." });
    }
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(402).json({ message: "User Already Registered." });
    }
    const hashPassword = await encryption(password);
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    await user.save();
    return res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Register Error - ", error);
    return res
      .status(500)
      .json({ message: "Error while Register user", error });
  }
};

module.exports = register;
