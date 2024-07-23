const express = require('express');
const {post: create} = require('../controller/user');

const router = express.Router();


router.post('/', create);




module.exports = router;