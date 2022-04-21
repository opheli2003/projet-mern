//All our back is coming from here
const express = require("express");
//Express is a light framework, enables to code faster
//Bc node is a bas niveau lg => With node we're getting closer to a "human" language
// const bodyParser = require("body-parser");
//body-parser helps us to handle requests

const userRoutes = require("./routes/user.routes");
const ticketRoute = require("./routes/ticket");

require("dotenv").config({ path: "./config/.env" });
/*To use dotenv : In your app, require and configure the package dotenv like this
Btw the curly braces we specify a custom path 
*/

require("./config/db");
const cors = require("cors");

const app = express();
//When we'll say app it would be related to our framework express

const mongoose = require("mongoose");

//Each app.use(middleware) is called every time a request is sent to the server

//Express middlew = fctions that exec durg the lifecycle of a request to the Express server
//Each middlew has access to the HTTP request and resp for each route it's attached to

app.use(express.json());
//helps us to take the request and display it
// at the right format

app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
);
//Doing app.use(cors()) we allow evryone to make us requests
//Specifying origin restricts the requests

// app.get('/', (req,res) =>{
//   res.send('welcome')
// }
// )

//always last but one
//=routes

app.use("/api/user", userRoutes);
// when there'll a api/user in the request, you'll get us
// to the userRoutes
app.use("/api/ticket", ticketRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});
//When the app is listening to the port 5000
//The app triggers a callback that does...
//A callback is a function passed as an argument
/*to another function 
To access your variables =>they are attached to the process.env object so we use them using
the pattern process.env.KEY */
//app.listen always read at the end

// module.exports=app
