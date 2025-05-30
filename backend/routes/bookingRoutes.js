const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookingController');

router.post('/', controller.bookRooms);
router.post('/random', controller.randomOccupy);
router.post('/reset', controller.resetHotel);
router.get('/', controller.getHotel);

module.exports = router;