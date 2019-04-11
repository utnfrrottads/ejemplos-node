var fs=require('fs');
var fileData=fs.readFileSync('items.txt','utf8');

console.log("fileData:\n"+fileData);
