mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vet');
mongoose.set('debug', true);

require('./models/client');
require('./models/pet');

var Client = mongoose.model('client');
var Pet = mongoose.model('pet');

Pet.find({name:"Firulais"})
  .then(pets =>{
    firu=pets[0];
    Client.find({username:"juanperez"})
      .then(clis =>{
        jp=clis[0];
        jp.pets.push(firu._id);
        jp.save(function(err){if(err) return handleError(err);});
      })
      .catch(err =>console.log(err))
  })
  .catch(err =>console.log(err));
