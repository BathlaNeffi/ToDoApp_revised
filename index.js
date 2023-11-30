const express = require('express');
const port= 8000;

const db = require('./config/mongoose');
const Task=require('./models/task');

const app=express();
const routes=require('./routes');
const path=require('path');

// Parser  also an middleware
app.use(express.urlencoded());

app.use('/',routes);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log('Error in firing erxpress server');
        return;
    }
    console.log('Express Server is up and running on port:',port);
})
