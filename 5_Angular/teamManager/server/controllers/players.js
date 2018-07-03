const Player = require('mongoose').model('Player');

module.exports = {
    index(request, response) {
        Player.find({})
            .then(players => response.json(players))
            .catch(console.log);
     },
    show(request, response) {
        Player.findById(request.params._id)
            .then(player => response.json(player))
            .catch(console.log);
     },
    update(request, response) {
        Player.findByIdAndUpdate(request.params._id, request.body, { new: true })
            .then(player => response.json(player))
            .catch(console.log);
     },
    create(request, response) {
        Player.create(request.body)
            .then(player => response.json(player))
            .catch(error => {
                const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message);

                response.json(errors);
            });
     },
    destroy(request, response) {
        Player.findByIdAndRemove(request.params._id)
            .then(player => response.json(player))
            .catch(console.log);
     },
};