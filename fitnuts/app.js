var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require("http");
var app = express();
var mongoose = require('mongoose');
var db       = require('./db');
var workouts = mongoose.model('workouts');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', 8000)
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler

app.get("/", function(req, res){
    workouts.find({id: req.query.id}, function(err, workouts){
        if(err) throw err;
        if(workouts){
            res.send(workouts);
        }else{
            res.send("no workouts")
        }
    });
});

app.post("/", function(req, res, next){
    var newWorkout = workouts({
        id: req.body.id,
        sets: req.body.sets,
        timestamp: req.body.timestamp
    });

    newWorkout.save(function(){
        next()
    });
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
