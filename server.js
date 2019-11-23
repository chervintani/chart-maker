var express = require('express')
var app = express()
const port = 3000
const http = require('http').Server(app);
const mongoose = require("mongoose");
var cors = require('cors')
let retrieve = require('./db/retrieve')
var db = require('./db/DB')
var bodyParser = require('body-parser')
app.use(cors())

app.use(express.static('/'))
app.use(bodyParser.urlencoded({ extended: true, limit: '110mb' }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

console.log("connecting....");
mongoose.useFindAndModify = true
mongoose.connect(db.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is connected!");
    }
});


app.get('/',function(req,res) {
  res.sendFile(__dirname + '/chart.html');
  });

app.post('/retrieve',(req,res)=>{
  retrieve(req.body, res);
})

  http.listen(port, function () {
	console.log('listening on port ' + port);
});