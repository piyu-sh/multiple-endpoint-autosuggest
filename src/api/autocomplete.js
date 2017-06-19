var fs = require('fs');

var getHotelData = function (fileName="./model/data.json") {
        var hotelList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        return hotelList;
  }

var findByQuery = function(hotelList,searchKey) {
    var results = hotelList.filter(function(element) {
        return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
    });
    return results;
};

module.exports = { getHotelData, findByQuery };