const { default: mongoose } = require("mongoose");

const colorSchema = mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('Color', colorSchema)