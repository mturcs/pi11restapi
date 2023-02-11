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

const recordingSchema = new Schema({
    deviceID: String,
    recordingActive: Boolean,
    frequency: Number,
    timeStamp: Number

})

//Export function to create "SomeModel" model class
module.exports = mongoose.model('beacon', beaconSchema);
module.exports = mongoose.model('recording', recordingSchema);