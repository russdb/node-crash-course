const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  // console.info(req)
  console.info(`${req.url}, ${req.method}`)
  //add a response to make the webpage do something other than hang when making a request
  //need to set headers first, content type first
  res.setHeader('Content-Type', 'text/html') //can be plain,html, etc
  let path = `./views/`

  switch (req.url) {
    case '/':
      path+= 'index.html'
      break;
    case '/about':
      path+= 'about.html'
      break;
    default: path+= '404.html'
      break;
  }
  //read the file 
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.error(err)
      res.end()
    }
    else {
      // res.write(data) //just one var so put data in the end function
      res.end(data) //this actually sends the write() back to the browser
    }
  })
})

//check the dev tools network tab and look for localhost to see the request details in browser

const port = 3000
server.listen(port, 'localhost', () => {
  console.info(`listening on port ${port}`)
})
//this code is running on the server, so it won't show in console on the browser
//hit ctrl + c in termianl to end process git