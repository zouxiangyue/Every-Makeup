var express=require('express');
var bodyParser=require('body-parser');
var json=bodyParser.json
var router=express.Router();
var mysql=require('mysql');
var url=require('url');
const con = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'123',
      database:'Makeup'
});


router.get('/users',(req,res)=>{
  con.query('select * from users',(err,result)=>{
    if(err){console.log(err)}
    else{
      res.writeHead(200, {
          "Content-Type": "text/plain",
          //res.writeHead(200, {"Content-Type": "application/json",
          "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
          "Access-Control-Allow-Methods": "GET, POST"
      });
      console.log(123);
      var getDataStr = url.parse(req.url).query
      res.end(JSON.stringify(result));
   }
  })
})

router.get('/works',(req,res)=>{
    con.query('select * from works',(err,result)=>{
       if(err){console.log(err)}
       else{
         res.writeHead(200, {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
            "Access-Control-Allow-Methods": "GET, POST"
        });
        //console.log(123);
        var getDataStr = url.parse(req.url).query
        res.end(JSON.stringify(result));   
      }
   })
});

router.get('/feedbacks',(req,res)=>{
  console.log(1234)
   con.query('select * from feedbacks',(err,result)=>{
   if(err){console.log(err)}
   else{
     res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
         "Access-Control-Allow-Methods": "GET, POST"  
     });
       //console.log(123);
        var getDataStr = url.parse(req.url).query
        res.end(JSON.stringify(result));
   }
  });
})

router.get('/dianzan',(req,res)=>{
  con.query('select * from likes',(err,result)=>{
      if(err){console.log(err)}
      else{
         res.writeHead(200, {
            "Content-Type": "text/plain",
              //res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
            "Access-Control-Allow-Methods": "GET, POST"
        });
        console.log(123);
        var getDataStr = url.parse(req.url).query
        res.end(JSON.stringify(result));
      }
    })
})

  router.get('/follows',(req,res)=>{
    con.query('select * from follows',(err,result)=>{
        if(err){console.log(err)}
        else{
           res.writeHead(200, {
              "Content-Type": "text/plain",
                //res.writeHead(200, {"Content-Type": "application/json",
             "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
            "Access-Control-Allow-Methods": "GET, POST"
          });
           console.log(123);
           var getDataStr = url.parse(req.url).query
           res.end(JSON.stringify(result));
        }
    }) 
})
module.exports = router;


