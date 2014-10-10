var exp = require('express');
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
expapp = exp();
expapp.get("/songs", function(request,response) {
	    var crs = req.body;
	   console.log(crs);
    var filePath = path.join(__dirname, 'BILLIE JEAN.MP3');
    var stat = fileSystem.statSync(filePath);
    
    response.writeHead(200, {
        'Content-Type': 'audio/mpeg', 
        'Content-Length': stat.size
    });
    
    var readStream = fileSystem.createReadStream(filePath);
    readStream.on('data', function(data) {
        response.write(data);
    });
    
    readStream.on('end', function() {
        response.end();        
    });
})
expapp.listen(2000);