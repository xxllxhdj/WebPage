
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var config = require('./config.js');
var cons = require('consolidate');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', config.webDir)));

app.use(bodyParser.json({
    limit: '1mb'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('server.view.html', cons.swig);
app.set('view engine', 'server.view.html');
app.set('views', path.join(__dirname, 'public', config.webDir));

app.get('/*', function (req, res) {
    //res.sendFile(path.join(__dirname, 'public', config.webDir, 'server.view.html'));
    res.render('index');
});

app.post('/admin', function (req, res) {
    //console.log('/admin:' + req.query.method);
    //console.log('/admin:' + JSON.stringify(req.body));
    res.send('Hello World');
});

app.get('/api', function (req, res) {
    //console.log('/api:' + req.query.method);
    //console.log('/api:' + JSON.stringify(req.query));
    res.send('Hello World');
});

var server = app.listen(config.port, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});