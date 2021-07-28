
const  mongoose=require('mongoose');
const {studentSchema}=require('./src/models/studentSchema')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true},
(err,link)=>{
   if(err){
    console.log("error",err)
   }
    console.log("db connected")
}
);

const Student=mongoose.model('student1',studentSchema);
const sidhrth=new Student({name:'sidhrt',class:"mern",age:20})

//sidhrth.save()
//to display all data
// Student.find((err,resp)=>{
//     if(err){
// console.log(err)
//     }else{
//         console.log("im all data-------",resp)
//     }
// })
//to display only one recorxd
// Student.findOne({name:'sidhrt'},(err,resp)=>{
//     if(err){
// console.log(err)
//     }else{
//         console.log("im one data-------",resp)
//     }
// })
// Student.findOneAndUpdate({name:'sidhrt'},
// {name:'updated-nme'},
// {overwrite:false,new:true},
// (err,resp)=>{
//     if(err){
//         console.log(err)
//             }else{
//                 console.log("im one updated-------",resp)
//             }
// }

// )
Student.findOneAndDelete(
{name:'updated-nme'},
(err,resp)=>{
    if(err){
        console.log(err)
            }else{
                console.log("im one delited-------",resp)
            }
}

)
