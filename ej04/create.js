mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vet');
mongoose.set('debug', true);

require('./models/client');
require('./models/pet');

var Client = mongoose.model('client');
var Pet = mongoose.model('pet');

var firulais= new Pet({
  name: "Firulais",
});



firulais.save(function(err){
  if(err) return handleError(err);

  var fido= new Pet({
    name: "Fido",
  });

  fido.save(function(err){
    if(err) return handleError(err);

    var jd= new Client({
      name: "John Doe",
      username: "johndoe",
      pets: [
        firulais._id,
        fido._id
      ]
    });

    jd.save(function(err){
      if(err) return handleError(err);

      var boby= new Pet({
        name: "Boby",
      });

      boby.save(function(err){
        if(err) return handleError(err);


        var jp= new Client({
          name: "Juan Perez",
          username: "juanperez",
          pets: [
            boby._id
          ]
        });
        jp.save(function(err){
          if(err) return handleError(err);
        })
      });


    })
  });

})
