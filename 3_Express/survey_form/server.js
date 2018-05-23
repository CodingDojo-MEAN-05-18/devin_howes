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

// port
app.listen(port, function(){
    console.log(`Listening on port ${ port }`);
});