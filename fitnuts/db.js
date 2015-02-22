var mongoose = require('mongoose')
var Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var db_url = process.env.MONGOHQ_URL || "mongodb://localhost:27017/fitnuts", 
    db = mongoose.connect(db_url);

var workoutSchema = new Schema({
	id: {type: String},
    sets: [{type:Number}],
	timestamp:{type: Number}
})

var workouts = db.model('workouts', workoutSchema);