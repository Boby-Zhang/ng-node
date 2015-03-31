var mongoose = require('mongoose');

module.exports = mongoose.model('Car',{
	name:{type:String,default:''},
	price:{type:Number,default:''},
	color:{type:String,default:''}
});