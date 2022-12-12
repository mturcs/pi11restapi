// File: ./models/grs-registry-sch.js

//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const beaconSchema = new Schema({
    deviceID: String,
    thermData: Number,
    humData: Number,
    timeStamp: Number
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('beacon', beaconSchema);