const Player = require('mongoose').model('Player');

module.exports = {
  // get all of resource
  index(request, response) {
    Player.find({})
      .then(players => response.json(players))
      .catch(console.log);
  },
  // create resource
  create(request, response) {
    Player.create(request.body)
      .then(player => response.json(player))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  // get a single resource
  show(request, response) {
    Player.findById(request.params.player_id)
      .then(player => response.json(player))
      .catch(console.log);
  },
  // update a resource
  update(request, response) {
    Player.findByIdAndUpdate(request.params.player_id, request.body, { new: true })
      .then(player => response.json(player))
      .catch(console.log);
  },
  // destroy resource
  destroy(request, response) {
    Player.findByIdAndRemove(request.params.player_id)
      .then(player => response.json(player))
      .catch(console.log);
  },
};