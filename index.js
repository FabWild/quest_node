"use strict";

const express = require('express');
const app = express();
const pug = require('pug');

var path = require("path");

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.listen(3000);
