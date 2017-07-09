'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HotelSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the hotel'
  },
  location: {
    type: String,
    required: 'Kindly enter the location of the hotel'
  }
});

module.exports = mongoose.model('hotels', HotelSchema);
