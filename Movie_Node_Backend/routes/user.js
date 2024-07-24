const express = require('express');
const {createUser: create} = require('../controller/user');

const router = express.Router();


router.post('/', create);




module.exports = router;