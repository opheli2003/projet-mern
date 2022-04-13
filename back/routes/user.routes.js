const router = require("express").Router();
/*express.Router() function = used to create a new router object
This function is used when you want to create a new router object in yr pgm to handle requests  */
// const authController= require('../controllers/auth.controller')
// const mongoose = require("mongoose");
const User = require("../models/user.model");
// const bcrypt = require("bcrypt");

//fonction avec comme paramètre l'id de l'utlisateur
//method sign =>crée a nv token
//3 paramètres: l'id de la pers à retrouver, notre clé secrète pr pvr ns décoder le token avec la clé secrète
//et la date d'expiration
//en 1er = nb de jours puis ms = là = 3 jours

//on va créer notre secret key in our env variables
//secret key is a kind of password to decrypt the token
// I've got this createToken and the token secret is this so you're looking for this id

//On a des requêtes à aller chercher dc il faut que le code soit asynchrone

// router.get("/register", (req, res) => {
//   res.send("hey");
// });

//Create an user
router.post("/register", async (req, res) => {
	//When you create an instance of a Mongoose model using new, calling save() makes Mongoose insert a new doc

	try {
		//it's an asynch function so I'm gonna write it inside my try and catch block
		//first i'll generate a salt
		const salt = await bcrypt.genSalt(10);
		//then I'll hash my actual password and I pass as an other argument the salt

		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		//I create a new user
		const newUser = new User({
			email: req.body.email,
			password: hashedPassword,
		});
		//User refers to our model
		//I save this new user and return a response
		const user = await newUser.save();
		/* The response to the creation of the user
  will be the user itself with all the infos */
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
	}
});
//when you use async and await, you should write a try and catch block bc if an error occurs it'll be caught

// router.post("/login", async (req, res) => {

//   try {
//     const { email, password } = req.body;
//     const maxAge = 3 * 24 * 60 * 60 * 1000;

//     const createToken = (id) => {
//       return jwt.sign({ id }, process.env.TOKEN_SECRET, {
//         expiresIn: maxAge,

//       });
//     };
//     //
//     const user = await User.login(email, password);
//     console.log(user)
//     //
//     const token = createToken(user._id);
//     //Avt = créer le token

//     res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
//     //res.cookie() = express fction used to set the cookie* name to a value
//     //first param = nom cookie, 2nd: the token, 3d: options: here it's for the security of the token, it'll be seen only by the server
//     res.status(200).json({ user: user._id });
//     //The res.json() function sends a JSON response. This method sends a resp that is the parameter converted to a JSON string.
//   } catch (err) {
//     res.status(200).json(err);
//   }
// });

//LOGIN
//Async/await + to catch an error =>We can catch that error using try..catch, the same way as a regular throw:

router.post("/login", async (req, res) => {
	try {
		//First I check the email
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(404).send("User not found");
		//Then I check the password using a bcrypt function
		//I compare the typed password with the user password
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		!validPassword && res.status(400).send("Wrong password");

		res.status(200).json(user);
	} catch (err) {
		console.log(err);
	}
});

router.get("/logOut", (req, res) => {});
//On lui retire son token qu'on lui a donné => il ne pourra plus justif avec CE token qu'il est cette personne là

module.exports = router;
