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

//add middleware
app.use(morgan('dev'))

//mongoose and mongo sanbox routes
app.get('/add-blog', (req,res) => {
  //be sure to import the model
  const blog = new Blog({
    title: 'New Blog 2',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })
blog.save() //promise
    .then((results) => {
      res.send(results)
    })
    .catch((err) => {
      console.warn(err)
    })
})

app.get('/all-blogs', (req,res) => {
  Blog.find() //promise
    .then(function(result) {
      res.send(result)
    })
    .catch(function(err){
      console.warn(err)
    })
})

app.get('/single-blog', function(req,res) {
  Blog.findById('63fbca233847032c5c315814')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.warn(err)
    })
})

//middleware must go above .get, since it sends the response back on a match and it stops reading the file
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