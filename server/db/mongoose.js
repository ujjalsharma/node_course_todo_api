const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var uri = "mongodb+srv://dbRagnar:ironman19@cluster0.dbykr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri || "mongodb://localhost:27017/TodoApp");


module.exports = {mongoose};