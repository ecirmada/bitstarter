var express = require('express');
var fs = require('fs);

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var indexbuffer = fs.readFileSync('index.html');
 var str = indexbuffer.toString('utf-8');


 response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
