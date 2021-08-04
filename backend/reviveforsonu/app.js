const express=require('express');
const app=express();
require('dotenv').config();
//const port=process.env.PORT

app.set('port',process.env.PORT || 3000)

const path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./src/views'));

app.use(express.static(path.join(__dirname, 'src/public')))
console.log(path.join(__dirname, './src/public'))


app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/sonu/:id",(req,res)=>{
    res.render("sonu",{key:"sonu don",value:req.params.id})
})





app.listen(app.get('port'),()=>{
    console.log(app.get('port'))
})