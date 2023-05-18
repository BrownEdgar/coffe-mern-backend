var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/CategoryController');
const controllerCategory = new categoryController();

const colorController = require('../controllers/ColorController');
const controllerColor = new colorController();

const vendorController = require('../controllers/VendorController');
const controllerVendor = new vendorController()

const coffeeController = require('../controllers/CoffeeController');
const controllerCoffee = new coffeeController()


/* GET home page. */
router.post('/vendor', controllerVendor.addVendor);
router.post('/color', controllerColor.addColor);
router.post('/category', controllerCategory.addCategory);
router.post('/coffee', controllerCoffee.addCofee);

module.exports = router;