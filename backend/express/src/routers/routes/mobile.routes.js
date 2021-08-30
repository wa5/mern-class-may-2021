var express=require('express');
let router=express.Router();
const {mobileGet,mobilePost}=require('../../controllers/mobile.Ctrl')


router.route('/')
.get(mobileGet)
.post(mobilePost)
.put()
.delete()



module.exports=router