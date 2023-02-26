const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

//creat an express app
const app = express()
//connect to mongodb
let dbUser = 'russd',
    dbpw = 'qmd9RXlUiL6627Hz',
    dbName = 'node-tuts'
const dbURI = `mongodb+srv://${dbUser}:${dbpw}@nodetuts.dluumlr.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(dbURI) //async
  .then((result) => { 
    console.info('connected to db')
    app.listen(3000)
  })
  .catch((err) => { console.error(err)} )

// register view engine with express
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
//take all url encoded data and pass into object
app.use(express.urlencoded({ extended: true }))

//add middleware
app.use(morgan('dev'))
//middleware must go above .get(), since it sends the response back on a match and it stops reading the file

//respond to requests & route
app.get('/', (req,res) => {
  res.redirect('/blogs')
})

app.get('/about', (req,res) => {
  res.render('about', {title: `About Us`})
})

//blog routes
app.get('/blogs', function(req,res){
  Blog.find().sort({ createdAt: -1 }) //newest first
    .then( (result) => { res.render('index',{title: 'All Blogs', blogs: result}) })
    .catch((err) => {console.warn(err)})
})

app.post('/blogs', function(req,res){
  const blog = new Blog(req.body)

  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.error(err))
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