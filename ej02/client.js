//https://github.com/mysqljs/mysql
var pool=require('./dbPool');

var mypool = new pool()
mypool.run('SELECT id, name from client', (results)=>{
  console.log(results)
  mypool.close();
});
