'use strict';


var mongoose = require('mongoose'),
  hotel = mongoose.model('hotels');

exports.list_all_hotels = function(req, res) {
  hotel.find({'name' : new RegExp(req.params.hotelId, 'i')}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};




exports.create_a_hotel = function(req, res) {
  var new_hotel = new hotel(req.body);
  new_hotel.save(function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.read_a_hotel = function(req, res) {
  hotel.findById(req.params.hotelId, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.update_a_hotel = function(req, res) {
  hotel.findOneAndUpdate({_id: req.params.hotelId}, req.body, {new: true}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.delete_a_hotel = function(req, res) {


  hotel.remove({
    _id: req.params.hotelId
  }, function(err, hotel) {
    if (err)
      res.send(err);
    res.json({ message: 'hotel successfully deleted' });
  });
};

