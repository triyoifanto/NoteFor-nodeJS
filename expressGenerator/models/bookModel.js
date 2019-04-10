var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
});

var book = mongoose.model('Book', bookSchema)

module.exports = book;