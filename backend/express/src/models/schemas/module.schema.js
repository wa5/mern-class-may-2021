const mongoose=require('mongoose');
const {Schema}=mongoose;

const userRegisteration=new Schema({

    name:String,
    email:String,
    password:Number,
  
})
module.exports=mongoose.model('registration', userRegisteration);
