class ColorController {
	async addColor(req, res) {
		const {colorName} = req.body;
		console.log("colorName:", colorName)
		try {
			const newColor = await req.app.services.colors.addColor(colorName);
			res.json({ message: newColor })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = ColorController;