var express = require("express");
var router = express.Router();

router.use("/signup",require("../controller/signup"));
router.use("/login",require("../controller/login"));
router.use("/user",require("../controller/user"));

module.exports = router;