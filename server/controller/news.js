var fs = require('fs');
const logoFolder = '/public/src/assets/images';

module.exports = {

    showAll: function(req, res) {
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