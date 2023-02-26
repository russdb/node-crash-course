const express = require('express')

//creat an express app
const app = express()

//now listen for requests
app.listen(3000)

//respond to requests
app.get('/', (req,res) => {
  //express automatically does the header and status code
  res.sendFile('./views/index.html', {root: __dirname }) //relative path, so set the root
})
app.get('/about', (req,res) => {
  //express automatically does the header and status code
  res.sendFile('./views/about.html', {root: __dirname }) //relative path, so set the root
})

//redirects
app.get('/about-us', (req,res) => {
  res.redirect('/about')
})

//404 page, if no match with get() above, this will fire
app.use((req,res) => {
  //can set status at same time
  res.status(404).sendFile('./views/404.html', {root:__dirname})
})
//now do nodemon app