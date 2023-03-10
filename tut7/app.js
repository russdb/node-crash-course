const express = require('express')

//creat an express app
const app = express()

// register view engine with express
app.set('view engine', 'ejs')

//now listen for requests
app.listen(3000)

//respond to requests
app.get('/', (req,res) => {
  const blogs = [
    {title: 'This is a blog title', snippet: 'The man lowered his sunglasses and peered through the small opening of the keyhole. Inside, he saw a man sitting on the bed.'},
    {title: 'This is a blog title', snippet: 'The man lowered his sunglasses and peered through the small opening of the keyhole. Inside, he saw a man sitting on the bed.'},
    {title: 'This is a blog title', snippet: 'The man lowered his sunglasses and peered through the small opening of the keyhole. Inside, he saw a man sitting on the bed.'},
  ]
  res.render('index', {title: 'Home', blogs}) //can also be blogs: blog, but not needed if same name.
})
app.get('/about', (req,res) => {
  res.render('about', {title: `About Us`})
})
//create blog post
app.get('/blogs/create', (req,res) => {
  res.render('create', {title: 'Create'})
})
//404 page, if no match with get() above, this will fire
app.use((req,res) => {
  res.status(404).render('404', {title: '404'})
})
//now do nodemon app