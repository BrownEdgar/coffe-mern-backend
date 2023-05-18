const { default: mongoose } = require("mongoose");

const coffeSchema = mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	vendor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Vendor"
	},
	price: {
		type: Number,
		min: 0.99
	},
	image: {
		type: String,
	},
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

	size: {
		enum: ["100", "150", "300", "500"]
	},
	color: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Color"
	},
	tags:{
		type: [String],
		required: true
	}
})


module.exports = mongoose.model('Coffe', coffeSchema)