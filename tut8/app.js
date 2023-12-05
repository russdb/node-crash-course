const express = require('express')
const morgan = require('morgan')
//creat an express app
const app = express()

// register view engine with express
app.set('view engine', 'ejs')

//now listen for requests
app.listen(3000)

/* middleware live son the server and operates between the request and the response
  REQUEST with app.use(func) -> middle ware does something app.get('/') -> send RESPONSE back with app.use(func)
  middleware must go above .get, since it sends the response back on a match and it stops reading the file
  respond to requests 

  use cases:
  logging
  authentication
  middleware to parse json
  return 404 pages
  get data
  etc
*/
app.use((req,res,next) => {
  console.log('in the next middleware')
  next(); //goes to the next blog of code
})

// middleware for static files
// public files must be specified
app.use(express.static('public'))

//add middleware
app.use(morgan('dev')) //morgan is middleware for logging

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
//here we use middleware
app.use((req,res) => {
  res.status(404).render('404', {title: '404'})
})
//now do nodemon app