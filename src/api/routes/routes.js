'use strict';
module.exports = function(app) {
  var hotels = require('../controllers/hotelsController');


  // hotelList Routes
  app.route('/hotels')
    .get(hotels.list_all_hotels)
    .post(hotels.create_a_hotel);


  app.route('/hotels/:hotelId')
    .get(hotels.list_all_hotels)
    // .get(hotels.read_a_hotel)
    .put(hotels.update_a_hotel)
    .delete(hotels.delete_a_hotel);
};
