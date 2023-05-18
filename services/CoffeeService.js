class ColorService {
	constructor(models) {
		this.models = models
	}

	async addCoffee(body) {
		const newCoffee = new this.models.coffee({ ...body })
		await newCoffee.save();
		return newCoffee;
	}
}


module.exports = ColorService