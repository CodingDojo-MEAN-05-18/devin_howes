const { playerController } = require('../controllers');
const router = require('express').Router();

// /players/:player._id

module.exports = router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .get('/:player._id', playerController.show)
  .put('/:player._id', playerController.update)
  .delete('/:player._id', playerController.destroy);