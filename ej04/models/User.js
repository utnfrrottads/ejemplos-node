var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String
}, {timestamps: true});

mongoose.model('User', UserSchema);
