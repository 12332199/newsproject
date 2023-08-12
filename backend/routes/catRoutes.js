const express = require('express');
const { addCat, getAllCat, getSinCat, updateCat, deleteCat } = require('../controllers/categoryCtrl');



const router = express.Router();

router.post('/add-category',addCat)
router.get('/all-category',getAllCat)
router.get('/sin-category/:slug',getSinCat)
router.patch('/update-category/:id',updateCat)
router.delete('/delete-category/:id',deleteCat)


module.exports = router