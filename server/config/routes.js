var apiController = require('./../controller/news.js')
var mongoose = require('mongoose');

module.exports = function(app){
    
    console.log("In the server routes")
	app.get("/api/showAll", apiController.showAll)

};