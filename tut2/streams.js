const fs = require('fs')

//the encoding is optional
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8' })

//on data event listener
readStream.on('data', (chunk) => {
  console.info(`---NEW CHUNK---`)
  console.info(chunk)
})