const express=require('express'),
      router=express.Router(),
      bodyParser=require('body-parser');
const mysql=require('mysql');
var json=bodyParser.json;

var con=mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'123',
  database:'Makeup'
})

router.post('/',function(req,res){
 
  console.log('hello register');
  //res.json('hello register');
 console.log(req.body);
 
 //获取新用户信息
  var name=req.body.name;
  var pwd=req.body.pwd;
  var school=req.body.school;
  var phone=req.body.phone || '';
  var mei_id;
  var status=0;
  
  con.query('select * from users',(err,results)=>{
    for(var i=0;i<=results.length;i++){
      console.log(results[i]);
      //console.log(results[i].email===email,results[i].phone===phone)
      if(results[i]!=undefined && results[i].phone && results[i].phone===phone){
        console.log('该手机号已被注册');
        res.json({'status':-2});
        break;
      }else if(i==results.length-1 || i==0){
        //获得当前时间
        var d=new Date();
        var dm= d.getMonth()<10 ? '0'+(d.getMonth()+1):d.getMonth()+1+'';
        var dd=d.getDate()<10 ? '0'+d.getDate():d.getDate()+'';
        var dh=d.getHours()<10 ? '0'+d.getHours():d.getHours()+'';
        var dmi=d.getMinutes()<10 ? '0'+d.getMinutes():d.getMinutes()+'';
        var ds=d.getSeconds()<10 ? '0'+d.getSeconds():d.getSeconds()+'';
        mei_id=''+d.getFullYear()+dm+dd+dh+dmi+ds;
        console.log(mei_id);
        var status=0;
        var follownum=0;
        var fannum=0;
        var headimg='../../assets/images/1.jpg'
       con.query('insert into users(mei_id,name,pwd,school,phone,status,headimg,follownum,fannum) values(?,?,?,?,?,?,?,?,?)',[mei_id,name,pwd,school,phone,status,headimg,follownum,fannum],
         (err,result)=>{
             if(err){
               console.log(err.message);
               process.exit(3)
             }else{
               //console.log(result);
               console.log('register success');
               res.json({'status':0})
             }
        });
     }
    }
  });
})

module.exports=router;
