const playerController = require('../../controllers/players');

const router = require('express').Router();

router
    .get('/', playerController.index)
    .post('/', playerController.create)
    .get('/_:id', playerController.show)
    .put('/_:id', playerController.update)
    .delete('/_:id', playerController.destroy)

module.exports = router;