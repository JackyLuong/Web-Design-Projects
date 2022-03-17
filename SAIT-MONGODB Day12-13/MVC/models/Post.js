// Require the mongoose module
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const postSchema = new mongoose.Schema({
	post: {
		type: String,
		required: true,
		trim: true
	},
	title: {
	    type: String,
	    required: true,
	    trim: true
	},
	url: {
	    type: String,
	    required: true,
	    trim: true,
		unique: "Error message goes here" 
	}
});
postSchema.plugin(uniqueValidator);

