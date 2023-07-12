const express = require('express');
const router = express.Router();

const controller = require('../../controllers/contacts');
const { validateBody, isValidId, auth } = require('../../middlewares');
const {contactsSchema, favoriteSchema} = require('../../schema');

router.get('/', auth, controller.getAllContacts);

router.get('/:contactId', auth, isValidId, controller.getContactById);

router.post('/', auth, validateBody(contactsSchema), controller.addContact);

router.delete('/:contactId', isValidId, controller.removeContactById);

router.put('/:contactId', auth, isValidId, validateBody(contactsSchema), controller.updateContactById);

router.patch('/:contactId/favorite', auth, isValidId, validateBody(favoriteSchema), controller.updateStatus);

module.exports = router
