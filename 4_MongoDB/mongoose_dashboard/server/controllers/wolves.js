// Require schema
const Wolve = require('mongoose').model('Wolve');

// Export Controller
module.exports = {
    index(req, res) {
        Wolve.find({}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong");
            } else {
                res.render('index', {wolves});
            }
        });
    },
    new(req, res) {
        // GET '/wolves/new' Displays a form for making a new wolf.
        res.render('new');
    },
    view(req, res) {
        // GET '/wolves/:id' Displays information about one wolf.
        Wolve.find({_id: req.params.id}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong");
            } else {
                res.render('profile', {wolves});
            }
        });
    },
    create(req, res) {
        // POST '/wolves' Should be the action attribute for the form in the above route(GET '/wolves/new').
        console.log(req.body);

        var wolve = new Wolve({
            name: req.body.name,
            age: req.body.age,
            color: req.body.color,
            isAggressive: req.body.isAggressive
        });

        wolve.save(function (err) {
            if (err) {
                console.log('something went wrong', err);
                for (var key in err.errors) {
                    req.flash('addwolve', err.errors[key].message);
                }
                res.redirect('/wolves/new');
            } else {
                console.log('Successfully added a wolf');
                res.redirect('/');
            }
        });
    },
    edit(req, res) {
        // GET '/wolves/edit/:id' Should show a form to edit an existing wolf.
        Wolve.find({_id: req.params.id}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong");
            } else {
                res.render('edit', {wolves});
            }
        });
    },
    update(req, res) {
        // POST '/wolves/:id' Should be the action attribute for the form in the above route(GET '/wolves/edit/:id').
        Wolve.update({_id: req.params.id}, {
                name: req.body.name,
                age: req.body.age,
                color: req.body.color,
                isAggressive: req.body.isAggressive
            },
            function (err, wolves) {
                if (err) {
                    console.log("Something went wrong");
                } else {
                    res.redirect('/');
                }
            });
    },
    destroy(req, res) {
        // POST '/wolves/destroy/:id' Should delete the wolf from the database by ID.
        Wolve.remove({_id: req.params.id}, function (err, wolves) {
            if (err) {
                console.log("Something went wrong");
            } else {
                res.redirect('/');
            }
        });
    },
};