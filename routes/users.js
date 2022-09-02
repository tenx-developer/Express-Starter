var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({data: "findAllUsersData", message: 'findAll'});
});

router.get('/sendgrid', userController.addUser);

router.get('/edit_user', userController.editUser);

module.exports = router;
