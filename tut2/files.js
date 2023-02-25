const fs = require('fs')

//reading files, async function
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.error(err)
  }
  console.data(info)
})