const express=require('express');
const path=require('path')
const app=express();
const bodyParser=require('body-parser');


app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
  //res.send('Hello World');
  res.sendFile(path.join(__dirname,'static','login.html'))
} );

app.get('/example',(req,res) => {
  res.send('Example served')
});

app.get('/person/:firstName/:lastName',(req,res)=>{
  let person={
    firstName:req.params.firstName,
    lastName:req.params.lastName
  };
  console.log(person);
  console.log(req.query);
  res.send('Created person: '+JSON.stringify(person));
});

app.post('/login',(req,res)=>{
  console.log(req.body);
  res.send('Post OK!')
});

app.post('/postjson',(req,res)=>{
  console.log(req.body);
  res.send({success:'JSON post OK!'})
});

app.listen(3000);

console.log('UP\'n running(ish) on 3000' )
