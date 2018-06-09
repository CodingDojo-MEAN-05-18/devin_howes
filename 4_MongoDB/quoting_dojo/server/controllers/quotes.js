// Require schema
const Quote = require('mongoose').model('Quote');

// Export controller
module.exports = {
    index(req, res) {
        res.render('index');
    },
    quotes(req, res) {
        Quote.find({}, function (err, quotes) {
            if (err) {
                console.log("Something went wrong");
                res.redirect('/');
            } else {
                console.log(quotes);
                res.render('quotes', {
                    quotes: quotes
                });
            }
        });
    },
    new(req, res) {
        console.log('POST DATA', req.body);
        var quote = new Quote({
            name: req.body.name,
            quote: req.body.quote
        });

        quote.save(function (err) {
            if (err) {
                console.log('something went wrong', err);
                for (var key in err.errors) {
                    req.flash('addquote', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('Successfully added a quote');
                res.redirect('/quotes');
            }
        });
    },
};