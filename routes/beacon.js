const express = require('express');
const router = express.Router();


/* local DB  */
//mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true });
//mongoosePromise.connect('mongodb://localhost:27017/db', { useNewUrlParser: true });

/* ATLAS Cloud DB */
//const uri = "mongodb+srv://mdb:fR998eendom@cluster0.sswh7.mongodb.net/db?retryWrites=true&w=majority";

//mongoose.connect(uri, { useNewUrlParser: true });

//mongoosePromise.connect('mongodb://localhost:27017/db', { useNewUrlParser: true });

beacon = require('../models/beacon-schema')
const readResults = [];


//create with post req
router.post('/create', function (req, res, next) {
    const mQuery = req.body
    console.log("mquery: ", req.body)
    beacon.create(mQuery, function (err, mresp) {
        if (err) {console.log("ERR",err)}
        res.send({"Message": "Created successfully"})
    })
})


//query with post request
router.post('/query', function (req, res, next) {
    const mQuery = req.body
    beacon.find(mQuery, function (err, mresp) {
        res("created")
    })

})


// array read
router.get('/read/', function (req, res, next) {

    beacon.find({}, function (err, mered) {

        res.json(mered)

    })


})

module.exports = router;