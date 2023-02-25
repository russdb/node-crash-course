const http = require('http')
const server = http.createServer((req, res) => {
console.info(`request made`)
})

const port = 3000
server.listen(port, 'localhost', () => {
  console.info(`listening on port ${port}`)
})

//hit ctrl + c in termianl to end process