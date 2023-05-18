class VendorService {
	constructor(models) {
		this.models = models
	}

	async addVendor(vendor, company) {
		const newVendor = new this.models.vendor({ 
			name: vendor, 
			company: company 
		})
		await newVendor.save();
		return newVendor
	}
}


module.exports = VendorService