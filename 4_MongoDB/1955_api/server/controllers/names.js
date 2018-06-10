// Require schema
const name = require('mongoose').model('Name');

// Export Controller
module.exports = {
    index(req, res) {
        name.find({}, function (err, name) {
            if (err) {
                console.log("Something went wrong", err);
                // Respond with JSON
                res.json({message: "Error", error: err});
            } else {
                // Respond with JSON
                res.json({message: "Success", data: name});
            }
        });
    },
    view(req, res) {
        // GET '/:name' Displays one name.
        name.find({ name: req.params.name }, function (err, name) {
            if (err) {
                console.log("Something went wrong", err);
                // Respond with JSON
                res.json({message: "Error", error: err});
            } else {
                // Respond with JSON
                res.json({message: "Success", data: name});
            }
        });
    },
    add(req, res) {
        // GET '/new/:name' adds a name to db
        name.create({ name: req.params.name }, function (err) {
            if (err) {
                console.log("Something went wrong", err);
                // Respond with JSON
                res.json({message: "Error", error: err});
            } else {
                // Redirect to names 
                res.redirect('/');
            }
        });
    },
    delete(req, res) {
        // Remove a name /remove/:name
        name.remove({ name: req.params.name }, function (err, name) {
           if (err) {
                console.log("Something went wrong", err);
                // Respond with JSON
                res.json({message: "Error", error: err});
            } else {
                // Respond with JSON
                res.redirect('/');
            }
        });
    },
};