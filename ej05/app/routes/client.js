var mongoose = require('mongoose');
var router=require('express').Router();
var User = mongoose.model('client');

var ObjectId = mongoose.Types.ObjectId;

router.get('/', (req, res, next) => {
  User.find({})
    .then(clients =>{
        if(!clients){ return res.sendStatus(401); }
        return res.json({'clients': clients})
    })
    .catch(next);
    //res.send("get clients");
    //next();
});

router.get('/:id', (req, res, next) => {
  //let id =  new ObjectId(req.params.id);
  let id = req.params.id
  User.findById(id)
    .populate('pets')
    .then(client =>{
        if(!client){ return res.sendStatus(401); }
        return res.json({'client': client})
    })
    .catch(next);
    //res.send("get client:" + id);
    //next();
});

router.post('/', (req, res, next) => {
  let id=req.body.id;
  let name=req.body.name;
  res.send("post client:"+id+" - name:"+name);
    //next();
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id
  let name=req.body.name;
  res.send("put client:"+id+" - name:"+name);
    //next();
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndRemove(id);
  res.sendStatus(200);
    //res.send("delete client:"+id);
    //next();
});

module.exports=router;
