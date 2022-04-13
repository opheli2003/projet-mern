//We call mongoose
const mongoose = require("mongoose");
//We call the function isEmail from the lib valid
//return true/false

// When we'll say bcrypt, that'll mean that we require
// the library bcrypt
// const bcrypt = require("bcrypt");

//userSchema is an object from the library mongoose
const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			//We call valid to ctrol the mail
			// lowercase: true,
			max: 50,
			unique: true,
			// trim: true,
			//delete spaces if any
		},
		password: {
			type: String,
			required: true,
			// max: 1024,
			//Bc it'll be crypted
			min: 6,
		},
	},
	{ timestamps: true }
);

// load this function bf saving
// UserSchema.pre('save', async function(next){
//   const salt = await bcrypt.genSalt()
// Bcrypt will generate a series of characters
// to salt the passw
//   const password = await bcrypt.hash(password,salt)
//   next()

// })

//it'll be the User collection in compass
//To use our schema we need to cvert our userSchema into a Model we can work with
//To do so, we pass it into
//mongoose.model(modelName, schema)
//and we export it

module.exports = mongoose.model("User", UserSchema);
