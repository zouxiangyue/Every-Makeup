
const express = require('express'),
    http=require('http'),
    app=express(),
    bodyParser=require('body-parser');
    
var login=require('./routes/login.js'),
    register=require('./routes/register.js');


//app.use(function(req, res) {
 // console.log('hello app');
//});

//app.all('*', function(req, res, next) {

//res.header("Access-Control-Allow-Origin", "*");


//res.header("Access-Control-Allow-Headers", "X-Requested-With");

      //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
                  //res.header("X-Powered-By",' 3.2.1')
      //res.header("Content-Type", "application/json;charset=utf-8");
    //next();

//});

//为了能解析post参数
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
  //extended:true
// }));

app.use('/api/login',login);
app.use('/api/register',register);
http.createServer(app).listen(8080);
module.exports = app;
