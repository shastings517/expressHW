var fs = require("fs");


// var str = fs.readFileSync(process.argv[2], "utf-8");
fs.readFile(process.argv[2], "utf-8", function(err, data){

  console.log(data.match(/\n/g).length);

});
// var counter = 0;
// console.log(str.match(/\n/g).length);
