class CoffeeController {
	async addCofee(req, res) {
		try {
			const newCoffee = await req.app.services.coffees.addCoffee(req.body);
			res.json({ message: newCoffee })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = CoffeeController;