var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    Comment: { type: String},
    post: {type:Schema.ObjectId, ref:'post'}
})

module.exports = mongoose.model('comments', commentSchema);