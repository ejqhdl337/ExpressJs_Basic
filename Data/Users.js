const mongoose = require('mongoose');

const adressSchema = mongoose.Schema({
	street : String,
	city : String,
	country : String
})

const userSchema = mongoose.Schema({
	id : {
		type :	String,
		minlength : 10,
		immutable : true,
		require : true,
		unique : true
	},
	name : String,
	address : adressSchema,
	recommender : {
		type : mongoose.SchemaTypes.ObjectId,
		ref : "Users"
	},
	insertTime : {
		type : Date,
		immutable : true,
		default : () => Date.now()
	},
	updateTime : {
		type : Date,
		default : () => Date.now()
	}
})

userSchema.pre("save",(next)=>{
	this.updateTime = Date.now()
	next()
})

module.exports = mongoose.model("Users",userSchema)