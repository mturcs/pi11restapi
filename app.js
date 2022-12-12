const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const {connect: connect1} = require('mongoose')

//routes goes here
let beaconRouter = require('./routes/beacon');
let cors = require('cors');
let app = express();

/* local DB  */
//const uri = "mongodb+srv://mdb:fR998eendom@cluster0.sswh7.mongodb.net/?retryWrites=true&w=majority"
const uri = 'mongodb://root:password@localhost:27017'
const mongoDB = process.env.MONGODB_URI || uri;



async function connect() {
    try {
        await connect1(mongoDB)
        console.log('\n Connected successfully to MongoDB')
    } catch (err) {
        console.log('\n Disconnect',err)
    }
}


connect('mongodb://localhost:27017/db', {useNewUrlParser: true}).then(r =>{ return r});

// this is to enable cors on server side
//https://stackoverflow.com/questions/51640206/angular-client-enable-cors
app.use(cors());

console.log("CORS ENABLED")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/app/beacon', beaconRouter);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    res.send('Restapi started');
    next(createError(404));
});

// error handler


module.exports = app;