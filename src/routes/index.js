const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js');



router.get('/' , controller.index);




module.exports = router