// Require the mongoose module
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const agentSchema = new mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId, 
    AgentId : {
		type: Number,
		required: true
	}, 
    AgtFirstName : {
		type: String,
		required: false,
		trim: true
	}, 
    AgtMiddleInitial : {
		type: String,
		required: false,
		trim: true
	}, 
    AgtLastName : {
		type: String,
		required: false,
		trim: true
	}, 
    AgtBusPhone : {
		type: String,
		required: false,
		trim: true
	}, 
    AgtEmail : {
		type: String,
		required: false,
		trim: true
	}, 
    AgtPosition : {
		type: String,
		required: false,
		trim: true
	}, 
    AgencyId : {
		type: Number,
		required: false,
		trim: true
	}
});
postSchema.plugin(uniqueValidator);
module.exports = mongoose.model('agents', agentSchema)
