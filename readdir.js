let testFolder = './data';
let fs = require('fs');

fs.readdir(testFolder, function(err, files){
    console.log(files);
});