const express = require('express')

//creat an express app
const app = express()

//now listen for requests
app.listen(3000)

//respond to requests
app.get('/', (req,res) => {
  //express automatically does the header and status code
  // res.send('<p>home page</p>')
  res.sendFile('./views/index.html', {root: __dirname }) //relative path, so set the root
})

app.get('/about', (req,res) => {
  //express automatically does the header and status code
  // res.send('<p>about page</p>') 
  res.sendFile('./views/about.html', {root: __dirname }) //relative path, so set the root

})
//now do nodemon app