// requiring the library
const mongoose = require('mongoose');

// connecting to the databse
mongoose.connect('mongodb://localhost:27017/todo_app_db');
// establishing connection with databse

const db=mongoose.connection;
// error statement
db.on('error', console.error.bind(console, 'connection error:'));
// up and runnning with success message
db.once('open', function() {
    console.log('Sucessfully connected to db');
});

