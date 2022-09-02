var express = require('express');

const addUser = (req, res, next)  => {
	res.json({message: 'addUser api'});
}

const editUser = (req, res, next)  => {
	res.json({message: 'editUser api'});
}


module.exports = {
	addUser,
	editUser
};
