const express=require('express')
const app=express();


app.post("/",(req,resp)=>{
    resp.send("hello world")
})

app.listen(8000,()=>{
    console.log("im server listning on 8000 port")
})