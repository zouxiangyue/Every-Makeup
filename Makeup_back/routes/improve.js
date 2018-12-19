const express = require('express'),
      router = express.Router(),
      bodyParser=require('body-parser');

var mysql=require('mysql');

var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123',
  database:'Makeup'
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('qbc')
 res.json({'abc':'abc'});
});

router.post('/name',function(req,res){
  console.log(req.body);
  var mei_id=req.body.mei_id;
  var name=req.body.name;
  con.query('update users set name=? where mei_id=?',[name,mei_id],(err,result)=>{
    if(err){
      console.log(err.message);
      process.exit(1)
    }else{
      console.log(result);
      res.json({'修改昵称成功':result})
    }
  })
})

router.post('/school',function(req,res){
    console.log(req.body);
    var mei_id=req.body.mei_id;
    var school=req.body.school;
    con.query('update users set school=? where mei_id=?',[school,mei_id],(err,result)=>{
        if(err){                                         
            console.log(err.message);
            process.exit(1)
        }else{
            console.log(result);
            res.json({'修改学校成功':result})    
        }
    })
})

router.post('/headimg',function(req,res){
    console.log(req.body);
    var mei_id=req.body.mei_id;
    var headimg=req.body.headimg;
    con.query('update users set headimg=? where mei_id=?',[headimg,mei_id],(err,result)=>{
          if(err){                                         
              console.log(err.message);
              process.exit(1)
          }else{
              console.log(result);
              res.json({'修改头像成功':result})
          }
    })
})

router.post('/sex',function(req,res){
    console.log(req.body);
    var mei_id=req.body.mei_id;
    var sex=req.body.sex;
        con.query('update users set sex=? where mei_id=?',[sex,mei_id],(err,result)=>{
            if(err){                                         
               console.log(err.message);
               process.exit(1)
            }else{
               console.log(result);
               res.json({'修改性别成功':result})
            }
        })
})

router.post('/birthday',function(req,res){
    console.log(req.body);
    var mei_id=req.body.mei_id;
    var birthday=req.body.birthday;
    con.query('update users set birthday=? where mei_id=?',[birthday,mei_id],(err,result)=>{
          if(err){                                         
              console.log(err.message);
              process.exit(1)
          }else{
              console.log(result);
              res.json({'修改生日成功':result})
          }
    })
})

router.post('/signature',function(req,res){
    console.log(req.body);
    var mei_id=req.body.mei_id;
    var signature=req.body.signature;
    con.query('update users set signature=? where mei_id=?',[signature,mei_id],(err,result)=>{
          if(err){                                         
              console.log(err.message);
              process.exit(1)
          }else{
              console.log(result);
              res.json({'修改签名成功':result}) 
          }
    })
})
module.exports = router;
