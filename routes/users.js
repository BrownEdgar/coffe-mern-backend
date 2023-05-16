var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	 console.log("ok")
  res.json({message: "ok"})
});

module.exports = router;
