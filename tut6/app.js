const express = require('express')

//creat an express app
const app = express()

//now listen for requests
app.listen(3000)

//respond to requests
app.get('/', (req,res) => {
  //express automatically does the header and status code
  res.send('<p>home page</p>') 
})

//now do nodemon app