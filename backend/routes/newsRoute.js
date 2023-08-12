const express = require('express');
const { addNews, getNews, getSinNews, updateNews, deleteNews, serachNews, BNews, TopNews, catFilter, findWithQuery } = require('../controllers/newsCtrl');
const upload = require('../middleware/uploadImage');



const router = express.Router();

router.post('/add-news',upload.single("photo"),addNews)
router.get('/all-news',getNews)
router.get('/sin-news/:id',getSinNews)
router.patch('/update-news/:id',upload.single("photo"),updateNews)
router.delete('/delete-news/:id',deleteNews)
router.get('/search/:keyword',serachNews)

router.get('/breaking-news',BNews)
router.get('/top-news',TopNews)
router.get('/filter-news/:keyword',catFilter)
router.get('/query',findWithQuery)





module.exports = router