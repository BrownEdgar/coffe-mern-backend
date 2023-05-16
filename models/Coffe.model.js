const { default: mongoose } = require("mongoose");

const coffeSchema = mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	title: {},
	description: {},
	price: {
		type: Number,
		min: 0.99
	},
	image: {},
	saleProcent: {
		type: Number,
	},
	quantity: {
		type: Number,

	},
	categories: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category"
	},
	title: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Vendor"
	},
	size: {
		enum: ["100", "150", "300", "500"]
	},
	color: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Color"
	},
})


module.exports = mongoose.model('Coffe', coffeSchema)