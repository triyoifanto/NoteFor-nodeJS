var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    gender: { type: String }
});

var author = mongoose.model('Author', authorSchema);

module.exports = author;