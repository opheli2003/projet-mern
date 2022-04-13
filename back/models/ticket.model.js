const { model, Schema } = require("mongoose");

const TicketSchema = new Schema(
	{
		users: {
			type: Schema.Types.ObjectId,
			ref: "user",
			// type: ObjectId pr pvoir avoir un lien avec le user, avec une ref
			// pas ds l'autre
			// host
		},
		title: {
			type: String,
			required: true,
			max: 50,
		},
		comment: {
			type: String,
			required: true,
			max: 500,
		},
	},
	{ timestamps: true }
);

const ticketModel = model("tickets", TicketSchema);

module.exports = ticketModel;
