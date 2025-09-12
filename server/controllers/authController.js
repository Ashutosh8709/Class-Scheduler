const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    console.log("Login request body:", req.body);
    const { email, password, role } = req.body;
    const user = await UserModel.findOne({ email, role });
    if (!user) {
      return res.json({
        message: "User Does not Exist",
        success: false,
      });
    }
    const isPasswordEqual = (await password) === user.password;
    // const isPasswordEqual=await bcrypt.compare(password,user.password);
    if (!isPasswordEqual) {
      return res.json({
        message: "Password is wrong",
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res.json({
      message: "Login success",
      success: true,
      userId: user.id,
      jwtToken,
      role,
      name: user.name,
    });
  } catch (err) {
    return res.json({
      message: err.message,
      success: false,
    });
  }
};

module.exports = { login };
