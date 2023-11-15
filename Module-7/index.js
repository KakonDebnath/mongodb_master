
// Local modules
const local1 = require('./local-1.js')

console.log(local1.add(5 , 3))
console.log(local1.sub(5 , 3))

// Build in module-> path

const path = require("path");
console.log(path.dirname);

