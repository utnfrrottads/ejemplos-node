mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vet');
mongoose.set('debug', true);

require('./models/pet');

var Pet = mongoose.model('pet');

Pet.findOneAndRemove({name:"Firulais"})
  .then(console.log("Bye bye dear Firulais"));
