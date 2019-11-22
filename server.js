var express = require('express')
var app = express()
const port = 3000
const http = require('http').Server(app);
var cors = require('cors')

app.use(cors())

app.get('/',function(req,res) {
    res.sendFile('index.html');
  });

  http.listen(port, function () {
	console.log('listening on port ' + port);
});