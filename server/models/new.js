var mongoose = require('mongoose');

//Sets database 
var NewsSchema = new mongoose.Schema({
	likes: {type: String, required: [true, "Name is needed"]},
	comments: {type: Number, required: false, minlength: 3, maxlength: 150},
	_user: {type: mongoose.Schema.Types.Mixed, ref: 'news'},
}, {timestamps:true});

//Get database
mongoose.model('news', NewsSchema); // We are setting these Schema in our Models.
