const { Router } = require('express');
const router = Router();

//controller
const horseController = require('../controllers/horseAPI.controller.js');

router.post('/', horseController.makeRequest);

module.exports = router;
