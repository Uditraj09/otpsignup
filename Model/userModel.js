const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = Schema(
  {
    fname : String,
    lname : String,
    email : {
        type : String,
        unique : true
    },
    password : String,
    number: {
      type: String,
      required: true,
      unique : true
    },
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      number: this.number,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );
  return token;
};

module.exports.User = model("User", userSchema);
