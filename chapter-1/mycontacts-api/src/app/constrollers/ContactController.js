class ContactController {
    index(request, response) {
        response.send('Send from ContactController');
    }
}

module.exports = new ContactController();
