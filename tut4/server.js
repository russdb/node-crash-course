const http = require('http')
const server = http.createServer((req, res) => {
  // console.info(req)
  console.info(`${req.url}, ${req.method}`)
  //add a response to make the webpage do something other than hang when making a request
  //need to set headers first, content type first
  res.setHeader('Content-Type', 'text/html') //can be plain,html, etc
  res.write(`<h3>hello world</h3>`)
  res.write(`<h4>hello world</h4>`)
  //etc etc
  res.end() //this actually sends the write() back to the browser
})

//check the dev tools network tab and look for localhost to see the request details in browser

const port = 3000
server.listen(port, 'localhost', () => {
  console.info(`listening on port ${port}`)
})
//this code is running on the server, so it won't show in console on the browser
//hit ctrl + c in termianl to end process git