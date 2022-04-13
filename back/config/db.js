const mongoose = require("mongoose");

//we call mongoose that we've just called

mongoose
	.connect(
		"mongodb+srv://opheli2003:ichbin@cluster0.pum1s.mongodb.net/mern-project",

		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Failed to connect to mongoDb", err));

//Pas de message sur console car ce fichier n'est connu/ personne
//en tt cas pas par server.js qui lance tout
