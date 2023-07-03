const Joi = require('joi');

const contactsSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required()
});

const favoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

module.exports = {contactsSchema, favoriteSchema}