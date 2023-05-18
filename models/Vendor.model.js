const { default: mongoose } = require("mongoose");

const vendorSchema = mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required:true
	},
	company: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('Vendor', vendorSchema)