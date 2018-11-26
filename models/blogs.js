var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    user_id: String,
    //category: [String],
    title: String,
    text: String,
    location: String,
    date_time: Date,
    signature: String,
    //image_url: [String],
    //view_count: String,
}, { collection: 'Blogs' });
var Blogs = mongoose.model('Blogs', blogSchema );


module.exports = Blogs;
