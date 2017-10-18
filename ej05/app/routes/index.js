//  const clientRoutes = require('./client');
//
//  module.exports = function(app, db) {
//    clientRoutes(app, db);
//    // Other route groups could go here, in the future
//  }
var router=require('express').Router();

router.use('/api/clients', require('./client'));

module.exports=router;
