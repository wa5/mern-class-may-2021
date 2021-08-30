var express=require('express');
let router=express.Router();
const {mobileGet,mobilePost}=require('../../controllers/mobile.Ctrl')


router.route('/')
.get((req,res)=>{
res.render('registeration');
})
.post()
.put()
.delete()



module.exports=router