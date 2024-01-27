const express = require('express')

const blogController = require('../controllers/blogController')
//we dont have access to app namespace here
// so we change it to router or something else
//this is sort of like creating a mini app
const router = express.Router()

//the index page
router.get('/', blogController.blog_index)

//blog routes, look in the blogController.js file

//create a new blog
router.get('/create', blogController.blog_create_get)
//post a new blog
router.post('/', blogController.blog_create_post)
//get single post
router.get('/:id', blogController.blog_details)
//delete a post
router.delete('/:id', blogController.blog_delete)

module.exports = router;