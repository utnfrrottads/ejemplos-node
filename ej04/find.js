mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vet');
mongoose.set('debug', true);

require('./models/client');
require('./models/pet');

var Client = mongoose.model('client');
var Pet = mongoose.model('pet');

Client.find({})
  .populate('pets')
  .then(function(clients){
    clients.forEach(cli => console.log(cli));
  })
