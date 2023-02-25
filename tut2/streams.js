const fs = require('fs')

//the encoding is optional
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/blog4.txt')
//on data event listener
readStream.on('data', (chunk) => {
  console.info(`\n------------------READING NEW CHUNK------------------\n`)
  console.info(chunk)
  console.info(`\n------------------WRITING NEW CHUNK------------------\n`)
  writeStream.write(chunk)
})
const writeStreamPipe = fs.createWriteStream('./docs/blog5.txt')

//simple piping
readStream.pipe(writeStreamPipe)

//look further into duplex piping.