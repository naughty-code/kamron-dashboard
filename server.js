const express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var api = require('./api.js');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/', express.static(__dirname + '/src/'));
app.use('/api', api);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))