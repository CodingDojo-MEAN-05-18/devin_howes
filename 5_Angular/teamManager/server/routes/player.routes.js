const { playerController } = require('../controllers');
const router = require('express').Router();

// /players/:player._id

module.exports = router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .get('/:player_id', playerController.show)
  .put('/:player_id', playerController.update)
  .delete('/:player_id', playerController.destroy);