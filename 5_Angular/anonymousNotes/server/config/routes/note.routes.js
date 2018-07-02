const noteController = require('../../controllers/notes');

const router = require('express').Router();

router
    .get('/', noteController.index)
    .post('/', noteController.create);

    module.exports = router;