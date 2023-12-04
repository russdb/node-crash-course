const people = ['elway', 'marino', 'brady', 'bradshaw', 'unitas', 'jackson','manning']
const ages = [18,22,24,21,20,25,28]

// console.table(people)

//these will not be accessible until we set up specific exports
//such as this:
module.exports = { //or a string, array, etc
  people,
  ages
}