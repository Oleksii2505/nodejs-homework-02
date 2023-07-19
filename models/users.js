const { Schema, model } = require("mongoose");

const {HandleMongooseError} = require("../helpers");

const userSchema = new Schema(
    {
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "Set password for user"],
      },
      token: String,
      avatarURL: {
        type: String,
        required: true,
      },
    },
    { versionKey: false, timestamps: true }
);

userSchema.post("save", HandleMongooseError);

const User = model("user", userSchema);

module.exports = User;