var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const models = require('./models')
const services = require('./services')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addRouter = require('./routes/added');




const { default: mongoose } = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add', addRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.models = {
	color: models.color,
	category: models.category,
	vendor: models.vendor,
	coffee: models.coffee,
}

app.services = {
	vendors: new (services.vendorService)(app.models),
	colors: new (services.colorService)(app.models),
	categories: new (services.categoryService)(app.models),
	coffees: new (services.coffeeService)(app.models),
}

mongoose.connect("mongodb://0.0.0.0:27017/test",
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	},
).then(() => console.log('connected to db'));
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
