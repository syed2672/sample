var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var profile = require('./app/routes/profileRoutes')();

// Just some options for the db connection
/*
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }; 

mongoose.connect('mongodb://syed:syed@ds253889.mlab.com:53889/meandemo', options);
*/
var bluebird = require('bluebird');
mongoose.Promise = bluebird
mongoose.connect('mongodb://syed:syed@ds253889.mlab.com:53889/meandemo', { useMongoClient: true})
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://syed:syed@ds253889.mlab.com:53889/meandemo`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL :mongodb://syed:syed@ds253889.mlab.com:53889/meandemo`)})




var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Log with Morgan
app.use(morgan('dev'));

// parse application/json and look for raw text                                   
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

// Static files
app.use(express.static(__dirname + '/public')); 

app.route('/profile')
    .post(profile.post)
    .get(profile.getAll);
app.route('/profile/:id')
    .get(profile.getOne);

// app.listen(port);
// console.log('listening on port ' + port);

// var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});
