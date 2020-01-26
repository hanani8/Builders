var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
    Title: {type: String},
    Link: {type: String},
    Author: {type: String},
    CommentIds: {type: Schema.ObjectId, ref: 'comments'}
})

module.exports = mongoose.model('post', postSchema);