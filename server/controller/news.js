var fs = require('fs');
var mongoose = require('mongoose');

console.log("in the api")

module.exports = {

    showAll: function(req, res) {
        console.log("In show all function")
        var logoFolder = './public/src/assets/images';
        
        // Use file system to list all images in assests/images folder
        fs.readdir(logoFolder, (err, files) => {
            if (err) {
                console.log("File error!", err)
            }
            else {
                files.forEach(file => {
                    console.log(file);
                  });
            res.json(files) 
            }
        });
    }
    
};//End of exports