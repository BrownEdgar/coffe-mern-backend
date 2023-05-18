class CategoryController {
	async addCategory(req, res) {
		const { categoryName } = req.body;
		console.log("categoryName:", categoryName)
		try {
			const newCategory = await req.app.services.categories.addCategory(categoryName);
			res.json({ message: newCategory })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = CategoryController;