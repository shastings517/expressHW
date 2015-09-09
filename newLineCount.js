var fs = require("fs");


var str = fs.readFileSync(process.argv[2], "utf-8");

// var counter = 0;

console.log(str.match(/\n/g).length);
