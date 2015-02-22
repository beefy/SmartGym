var mongoose = require('mongoose');
var db 		 = require('../db');
var workouts = mongoose.model('workouts');

//Homepage functions
exports.index = function(req, res){	

  	workouts.find({}).execFind(function(err, posts){
  		if(workouts){
  			res.render('home', { title: title, subTitle:subTitle, workouts:workouts, admin:req.session.admin});
  		}else{
  			res.render('home', { title: title, subTitle:subTitle, workouts:null, admin:req.session.admin })
  		}
  	});

};
exports.home_post_handler = function(req, res){
	

	
}