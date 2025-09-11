const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "dept", "faculty", "student"],
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  facultyId: {
    type: String,
    required: function () {
      return this.role === "faculty";
    },
    default: null,
  },
  studentId: {
    type: String,
    required: function () {
      return this.role === "student";
    },
    default: null,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
