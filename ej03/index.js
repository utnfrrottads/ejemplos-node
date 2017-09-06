var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/booking", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('bookableType');
  var doc = {name:"laptop", maxBookingTime:8, simultaneousBooking:false};

  collection.remove({name:"laptop"},{w:1}, function(err, result) {
    collection.insert(doc, {w:1}, function(err, result) { });
  });


    collection.find().toArray(function(err, items) {
      if (err === null) {
        items.forEach(i => {console.log(i)});
      }
    });

    var stream = collection.find({maxBookingTime:8}).stream();
    stream.on("data", p => {
      console.log("\n\nParking");
      console.log(p);
    });
    stream.on("end", function() {
      collection.update({name:"laptop"}, {$set:{maxBookingTime:{unit:"hours", time:8}}}, {w:1}, function(err, result) {
        if (err){
          console.log(err);
        }
        collection.findOne({name:"laptop"}, function(err, l) {
          console.log("\n\nlaptop");
          console.log(l);
          db.close()
        });
      });
    });



  //});
});
