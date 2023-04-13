var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');
var boardRouter = require('./routes/board');
var SelectorRouter = require('./routes/selector');
var Car = require("./models/car");

var resorRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

console.log("connecting...")
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/car', carRouter);
app.use('/board', boardRouter);
app.use('/Selector', SelectorRouter);
app.use('/models/car', Car);
app.use('/resource', resorRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Car.deleteMany();
  let instance1 = new
  Car({Car_color:"Black",Car_model:"Challenger",Car_Title:"Clean", Car_mileage:30, Car_cost:30000});
  instance1.save().then( () => {
    console.log('First Object is created');
  }).catch( (e) => {    
    console.log('There was an error', e.message);  
  });
  let instance2 = new
  Car({Car_color:"White",Car_model:"corolla",Car_Title:"Rebuilt", Car_mileage:25, Car_cost:25000});
  instance2.save().then( () => {
    console.log('Second Object is created');
  }).catch( (e) => {    
    console.log('There was an error', e.message);  
  });
  let instance3 = new
  Car({Car_color:"Blue",Car_model:"Elantra",Car_Title:"salvage", Car_mileage:27, Car_cost:20000});
  instance3.save().then( () => {
    console.log('Third Object is created');
  }).catch( (e) => {    
    console.log('There was an error', e.message);  
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}
  
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app;
