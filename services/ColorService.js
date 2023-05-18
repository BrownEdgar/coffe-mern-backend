class ColorService {
	constructor(models) {
		this.models = models
	}

	async addColor(color) {
		const newColor = new this.models.color({ name: color })
		await newColor.save();
		return newColor
	}
}


module.exports = ColorService