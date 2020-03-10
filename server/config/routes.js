var apiController = require('./../controllers/news.js')

module.exports = function(app){
    console.log("In routes.js")
	app.get('/api/showAll', apiController.showAll)

};