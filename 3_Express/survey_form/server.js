const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env['PORT'] || 8000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){
    res.render('index');
});

app.post('/result', function(req, res){
    console.log( "post data", req.body);
    var context = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment
    };
    res.render('result', {context: context});
});

// port
app.listen(port, function(){
    console.log(`Listening on port ${ port }`);
});