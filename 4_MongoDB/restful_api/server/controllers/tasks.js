const Task = require('mongoose').model('Task');

module.exports = {
    index(req, res) {
        Task.find({})
            .then(tasks => res.json(tasks))
            .catch(error => res.json(error));
    },
    view(req, res) {
        console.log(req.params)
        Task.findOne(req.params)
            .then(Task => {
                res.json(Task ? Task : 'No such Task!');
            })
            .catch(error => res.json(error));
    },
    create(req, res) {
        Task.create(req.body)
            .then(Task => res.json(Task))
            .catch(error => res.json(error));
    },
    update(req, res) {
        Task.update(req.params)
            .then(Tasl => res.json(Task))
            .catch(error => res.json(error));
    },
    destroy(req, res) {
        Task.remove(req.params)
            .then(result => res.json(result))
            .catch(error => res.json(error));
    },
};