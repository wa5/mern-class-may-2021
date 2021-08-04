require('dotenv').config()
const express = require('express')
const app = express();
//evenment variable
app.set('port', process.env.PORT || 3000)

const path = require('path')
//views folder templet setting
const ejs = require('ejs');
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))
//stic files path
var pth=path.join(__dirname, './src/public')
app.use(express.static(pth))

const checkUrl=(req,res,next)=>{
    console.log("current route is",req.originalUrl);
    next();
}

app.use(checkUrl);
app.get('/hello',(req,res)=>{
res.send("common page")
})

app.get('/hr',(req,res)=>{
    res.send("common page")
    })
    
    





app.listen(app.get('port'), () => {
    console.log("im server listning on 9000 port")
})