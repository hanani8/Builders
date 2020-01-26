var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true}
})

module.exports = mongoose.model('user', userSchema);
