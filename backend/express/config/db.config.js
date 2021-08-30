
const  mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true},
(err,link)=>{
   if(err){
    console.log("error",err)
   }
    console.log("db connected")
}
);