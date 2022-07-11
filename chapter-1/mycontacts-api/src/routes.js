const { Router } = require('express');
const ContactController = require('./app/constrollers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);

module.exports = router;
