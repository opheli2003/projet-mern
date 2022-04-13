const router = require("express").Router();
const Ticket = require("../models/ticket.model");

//Create a ticket
router.post("/", async (req, res) => {
	const newTicket = new Ticket(req.body);
	try {
		const savedTicket = await newTicket.save();
		res.status(200).json(savedTicket);
	} catch (err) {
		res.status(500).json(err);
	}
});
//Update a ticket
router.put("/:id", async (req, res) => {
	try {
		//same id
		//Le mot-clé await fait en sorte que JavaScript attende que cette promesse se réalise et renvoie son résultat.
		//=l'appel à la db

		const ticket = await Ticket.findById(req.params.id);
		if (ticket.users === req.body.users) {
			await ticket.updateOne({ $set: req.body });
			res.status(200).json("ticket updated");
		} else {
			res.status(403).json("you can update only your ticket");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//Delete a ticket

router.delete("/:id", async (req, res) => {
	try {
		const ticket = await Ticket.findById(req.params.id);
		if (ticket.userId === req.body.userId) {
			await ticket.deleteOne();
			res.status(200).json("ticket deleted");
		} else {
			res.status(403).json("you can only delete your ticket");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//Get all tickets//

router.get("/all-tickets", (req, res) => {
	Ticket.find((err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			console.log(err);
		}
	});
});

//In the end bc the '/:id' route will accept any value that comes after the '/' as an id
//Get a ticket
router.get("/:id", async (req, res) => {
	const ticket = await Ticket.findById(req.params.id);
	res.status(200).json(ticket);
});
// router.get("mytickets", async (req,res)=>{
//     let ticketArray = []
//     try{
//         const currentUser = await User.findById(req.)

//     }
//     catch{

//     }
// })

module.exports = router;
