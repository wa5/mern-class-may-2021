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
var pth = path.join(__dirname, './src/public')
app.use(express.static(pth))

//body parser for post data capturing from form
const bodyparser=require('body-parser')
//pare json
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
const {mobile}=require('./src/routers');

//databse connection
require('./config/db.config')






const checkUrl = (req, res, next) => {
    console.log("current route is", req.originalUrl);
    next();
}

app.use(checkUrl);
app.get('/hello', (req, res) => {
    res.send("common page")
})

app.get('/hr', (req, res) => {
    res.send("common page")
})

//first way passing value
// app.get('/api/mobile',(req,res)=>{
//     res.render('mobiles',{mname:"samsung"})
// })
//second way passing value
// app.get('/api/mobile/:name',(req,res)=>{

//     res.render('mobiles',{mname:req.params.name})
// })


app.get('/api/favmobile', (req, res) => {

    res.render('favmobile')
})
app.use('/api/mobile', mobile)
app.use('/api/mobile', mobile)



app.listen(app.get('port'), () => {
    console.log("im server listning on 9000 port", app.get('port'))
})