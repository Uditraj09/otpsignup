const { Schema, model } = require("mongoose");

module.exports.Otp = model(
  "Otp",
  Schema(
    {
      fname: String,
      lname: String,
      email: {
        type: String,
        unique: true,
      },
      password: String,
      number: {
        type: String,
        required: true,
      },
      otp: {
        type: String,
        required: true,
      },
      createdAt: { type: Date, default: Date.now, index: { expires: 300 } },
    },
    { timestamps: true }
  )
);
