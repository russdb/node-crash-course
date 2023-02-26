const express = require('express')

//creat an express app
const app = express()

// register view engine with express
app.set('view engine', 'ejs')

//now listen for requests
app.listen(3000)

//respond to requests
app.get('/', (req,res) => {
  res.render('index')
})
app.get('/about', (req,res) => {
  res.render('about')
})
//create blog post
app.get('/blogs/create', (req,res) => {
  res.render('create')
})
//404 page, if no match with get() above, this will fire
app.use((req,res) => {
  res.status(404).render('404')
})
//now do nodemon app