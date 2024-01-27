//nosql has collections, similar to tables
//can have as many collections as you want
//holds a series of key value pairs
//this uses mongodbatlas service

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

//creat an express app
const app = express()

//mongoose is an ORM library, object document mapping
//can use models that allow us to do stuff, like findbyid, delete, etc
//connect to mongodb
//schema defines what property an element has, such as a user or a blog entry
//blog schema: title, text, etc
//will have methods that help us do stuff, such as getting, saving, deleting, etc
let dbUser = 'russd',
    dbpw = 'russ1234',
    dbName = 'node-tuts'
const dbURI = `mongodb+srv://${dbUser}:${dbpw}@node-tuts.xj4uoaa.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(dbURI) //async
  .then((result) => { 
    console.info('connected to db')
    app.listen(3000) //we need to connect to the db before making requests
  })
  .catch((err) => { console.error(err)} )

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//Respond to requests and routes

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
});

//view about page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
});

// blog routes, look in blogRoutes.js
// since this is in its own route file, we can use
// it in the same way we use other middleware
app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
});