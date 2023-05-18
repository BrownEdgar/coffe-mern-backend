class CategoryService {
	constructor(models) {
		this.models = models
	}

	async addCategory(category){
		const newCategory = new this.models.category({ name: category })
		await newCategory.save();
		return newCategory
	}
}


module.exports = CategoryService