var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/expressSample_Book');
var dbconnection = mongoose.connection;
dbconnection.on('error', console.error.bind(console, 'MONGODB con error'));