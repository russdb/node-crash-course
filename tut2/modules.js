const xyz = require('./people')  


//this will actually return an empty object
//can only access from inside the people.js file if not using exports keyword.
console.info(xyz) 
console.info(xyz.people) 
console.info(xyz.ages) 

//we can also use object destructuring

const { people, ages } = require('./people')  
console.table(people)
console.table(ages)

//node has built in core global objects 
const os = require('os')
console.info(os)
//there are lots of handy methods, such as platform() and homedir()
console.info(os.platform(), os.homedir(), os.totalmem())