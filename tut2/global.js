//node comes with global variables,
//many browser objects cannot be accessed in node, such as window, node is for back end.

console.info(global)



//get absolute paths of dir and filename
console.info(__dirname)
console.info(__filename)

global.setTimeout(() => {
  console.info(`set timeout with global.`)
}, 500)

//dont need to use global.
setTimeout(() => {
  console.info(`set timeout w/o global. then stopping the interval`)
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.info(`interval function`)
}, 1000)
//can press ctrl + c in terminal to end the loop manually
