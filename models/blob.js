/*
  glob.js
*/

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Yes, a Mongoose schema to effectively define an object with no schema. I don't know
// where we're headed with this Blob object right now so Mongoose is quick and easy to
// get us going.
//
const Blob = new Schema({
  blob         : mongoose.Schema.Types.Mixed,
  uuid         : { type : String },
  creationDate : { type : Date, default : undefined }
});

module.exports = mongoose.model('blob', Blob);
