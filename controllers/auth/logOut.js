const { User } = require("../../models");

const logOut = async (req, res) => {
  const { _id } = req.user;
  await User.updateById({ _id, token: "" });

  res.json({
    message: "Logout success",
  });
};

module.exports = logOut;