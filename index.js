const express = require('express')
const app = express()
const PORT = 8080

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


app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`)
});