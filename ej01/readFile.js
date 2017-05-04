var fs=require('fs');
var fileData="";
fs.readFile('items.txt','utf8',(err,data) => {
  if(err){
    console.log(err);
  } else {
    fileData=data;
    console.log("callback data:\n"+data);
  }
});

console.log("fileData:\n"+fileData);
