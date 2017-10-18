// module.exports = function(app, db) {
//   app.get('/api/clients', (req, res) => {
//     res.send('Hello get->clients');
//   });
//
//   app.get('/api/clients/:id', (req, res) => {
//     let id = req.params.id;
//     res.send('Hello get->client '+ id);
//   });
//
//   app.post('/api/clients', (req,res) => {
//     res.send('Hello post->client');
//   });
//
//   app.put('/api/clients/:id', (req,res) => {
//     let id = req.params.id;
//     res.send('Hello put->client'+id);
//   });
//
//   app.delete('/api/clients/:id', (req,res) => {
//     let id = req.params.id;
//     res.send('Hello delete->client'+id);
//   });
// };

var router=require('express').Router()

router.get('/', (req, res, next) => {
  res.send("get clients");
    //next();
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  res.send("get client:" + id);
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
  let id = req.params.id
  res.send("delete client:"+id);
    //next();
});

module.exports=router;
