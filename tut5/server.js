/**
 * instead of restarting server manually, lets use nodemon
 * npm install -g nodemon
 * to use: nodemon fileName
 * this will be added to my package.json file
 * but added to gitignore
 */

const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {

  //lodash
  const num = _.random(0,20)
  console.info(num)

  const greet = _.once(() => {
    console.info(`hello`)
  })

  greet()

  //set header
  res.setHeader('Content-Type', 'text/html') //can be plain,html, etc
  let path = `./views/`

  /* Responses
    100 range - informational
    200 range - success codes
    300 range - codes for redirects
    400 range - user or client errors
    500 range - server errors
  */ 
  //this is where express.js can help, but here it is under the hood
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break;
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break;
    //redirect
    case '/about-us':
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      break;
    default: path += '404.html'
      res.statusCode = 404
      break;
  }
  //read the file 
  fs.readFile(path, (err, data) => {
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