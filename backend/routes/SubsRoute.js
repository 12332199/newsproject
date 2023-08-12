const express = require('express');
const { addSubs, getSubs } = require('../controllers/subsCtrl');



const router = express.Router();

router.post('/add-subscriber',addSubs)
router.get('/get-subscriber',getSubs)



module.exports = router