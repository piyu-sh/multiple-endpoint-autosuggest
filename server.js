var express = require('express');
const path = require('path');
autocomplete=require('./src/api/autocomplete');


var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

var hotelList=autocomplete.getHotelData("./src/api/model/data.json");

app.get('/autocomplete/:search',function(req,res){
    res.json(autocomplete.findByQuery(hotelList,req.params.search))
});

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
var server = app.listen(3000, function() {
    var host = "localhost";
    var port = "3000";
    console.log('app listening at http://%s:%s', host, port);
});