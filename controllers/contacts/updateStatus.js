const Contact = require("../../models");
const { RequestError } = require("../../helpers");

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.updateById(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateStatus;