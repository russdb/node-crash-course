const fs = require('fs')

//reading files, async function
fs.readFile('./docs/blog1.txt', (err, data) => { //(err,data) is callback that runs after readfile is done
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

//directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) console.error(err)
    console.info(`folder created`)
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) console.error(err)
    console.info(`folder deleted`)
  })
}

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) console.error(err)
    console.info('file deleted')
  })
}