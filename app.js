var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/DentalEvents');
var db = mongoose.connection;

//initialize routes
var index = require('./routes/index');
var students = require('./routes/students');

/*initialize app*/
var app = express();

//join path for dist
app.set('dist', path.join(__dirname,'dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client/dist')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//middleware to get the index from dist


//routes
app.use('/', index);
app.use('/api', router);

app.use('/api', students);


app.use(cors());
app.listen(port);
console.log('DentalEvent app is running at' + port);