const express=require('express');
var bodyParser=require('body-parser');
var json=bodyParser.json
var router=express.Router();
var mysql=require('mysql');
         const con = mysql.createConnection({
         host:'localhost',
         user:'root',
         password:'123',
         database:'Makeup'  
});

router.get('/',(req,res)=>{
  con.query('select * from works',(err,results)=>{
    var options=[];
    if(err){
      console.log(err.message);
    }else{
      var len=results.length;
      for(let i=0;i<len;i++){
       //console.log(results[i],i);
        let arr=[];
        arr.push(results[i])
      
          con.query('select * from users where mei_id=?',[results[i].mei_id],(err,re)=>{
             if(err){
               console.log(err.message)
             }
             else if(re){
              // console.log(results[i],re[0],i);
               arr.push(re[0]);
               console.log('arr=',arr);
               options.push(arr);
              // console.log('options=',options);
               console.log(i);
               if(i>=len-1){
                 res.json(options);
               };
             }
           })
      }
    }
  })
})

module.exports = router;


