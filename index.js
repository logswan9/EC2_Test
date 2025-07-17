const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 8000

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/images/:imageName', function(req, res){
    res.sendFile(__dirname + `/images/${req.params['imageName']}`);
});

app.get('/manip.js', function(req, res){
    res.sendFile(__dirname + '/manip.js');
});

app.get('/style.css', function(req, res){
    res.sendFile(__dirname + '/style.css');
});

app.get('/transportation.html', function(req, res){
    res.sendFile(__dirname + '/transportation.html');
});

app.get('/sources.html', function(req, res){
    res.sendFile(__dirname + '/sources.html');
});

app.get('/lodgeHotels.html', function(req, res){
    res.sendFile(__dirname + '/lodgeHotels.html');
});

app.get('/food.html', function(req, res){
    res.sendFile(__dirname + '/food.html');
});

app.get('/faqs.html', function(req, res){
    res.sendFile(__dirname + '/faqs.html');
});

app.get('/entertainment.html', function(req, res){
    res.sendFile(__dirname + '/entertainment.html');
});

app.get('/contact.html', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PW
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`)
});