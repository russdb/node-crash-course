const fs = require('fs')

//reading files, async function
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.error(err)
  }
  console.info(data)
  console.info(data.toString()) //to see text
})

//writing files
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
  console.info(`files written`)
})

//node will create the file automatically
fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
  console.info(`files written`)
})