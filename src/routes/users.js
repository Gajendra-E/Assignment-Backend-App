var express = require('express');
var router = express.Router();
var userController =require("../controllers/user") 

/* GET users listing. */
router.get('/',userController.fetchAllUsers)
router.post('/',userController.phoneNumberValidation,userController.addUser)

module.exports = router;
