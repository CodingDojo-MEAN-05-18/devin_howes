const taskController = require('../controllers/tasks');

module.exports = function (app) {
    app.get('/', taskController.index);
    app.get('/:_id', taskController.view);
    app.post('/task', taskController.create);
    app.put('/task/:_id', taskController.update);
    app.delete('/task/:_id', taskController.destroy);
};