const Blog = require('../models/blog')

//view the blog index
const blog_index = (req,res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('blogs/index', { blogs: result, title: 'All blogs' })
    })
    .catch(err => {
      console.log(err)
    })
}
//get details of a single blog
const blog_details = (req,res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(result => {
      res.render('blogs/details', { blog: result, title: 'Blog Details' })
    })
    .catch(err => {
      console.log(err)
      res.render('404', {title: 'Blog Not Found'})
    })
}

//view the create blog page
const blog_create_get = (req,res) => {
  res.status(404).render('blogs/create', { title: 'Create a new blog' })
}

//create a blog post
const blog_create_post =  (req,res) => {
   // console.log(req.body)
  const blog = new Blog(req.body)

  blog.save()
    .then(result => {
      res.redirect('/blogs')
    })
    .catch(err => {
      console.log(err)
    })
}

//delete a blog post
const blog_delete = (req,res) => {
  const id = req.params.id
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' })
    })
    .catch(err => {
      console.log(err)
    })
}

//export
module.exports = { 
  blog_index, 
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete 
}
