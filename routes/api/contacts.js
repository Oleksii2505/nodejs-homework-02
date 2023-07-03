const express = require('express');
const router = express.Router();

const controller = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../middlewares');
const {contactsSchema, favoriteSchema} = require('../../schema/contacts');

router.get('/', controller.getAllContacts);

router.get('/:contactId', isValidId, controller.getContactById);

router.post('/', validateBody(contactsSchema), controller.addContact);

router.delete('/:contactId', isValidId, controller.removeContactById);

router.put('/:contactId', isValidId, validateBody(contactsSchema), controller.updateContactById);

router.patch('/:contactId/favorite', isValidId, validateBody(favoriteSchema), controller.updateStatus);

module.exports = router
