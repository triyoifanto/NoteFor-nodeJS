const fs = require('fs');
let contents = fs.readFileSync('package.json').toString();

console.log(contents);
