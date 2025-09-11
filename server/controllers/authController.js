const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { regId, password, role } = req.body;
    const user = await UserModel.findOne({ regId, role });
    if (!user) {
      return res.json({
        message: "User Does not Exist",
        success: false,
      });
    }
    const isPasswordEqual = (await password) === user.password;
    // const isPasswordEqual=await bcrypt.compare(password,user.password);
    if (!isPasswordEqual) {
      res.json({
        message: "Password is wrong",
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { username, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.json({
      message: "Login success",
      success: true,
      userId: user.id,
      jwtToken,
      role,
      name: user.name,
    });
  } catch (err) {
    res.json({
      message: err.message,
      success: false,
    });
  }
};

module.exports = { login };
