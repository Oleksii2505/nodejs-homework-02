const registration = require("./registration");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logOut = require("./logOut");
const updateAvatar = require("./updateAvatar");

const { controllerWrapper } = require("../../helpers");

module.exports = {
  registration: controllerWrapper(registration),
  login: controllerWrapper(login),
  getCurrent: controllerWrapper(getCurrent),
  logOut: controllerWrapper(logOut),
  updateAvatar: controllerWrapper(updateAvatar),
};