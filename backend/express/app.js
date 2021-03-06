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
const {mobile,registeration}=require('./src/routers');
const { UserRegisteration } = require('./src/models');

//databse connection
require('./config/db.config')








app.get('/', (req, res) => {
    res.render("index")
})
app.post('/', (req, res) => {
    const sonu=new UserRegisteration({name:req.body.name,email:req.body.email,password:req.body.password})
    sonu.save()
    res.render("index",{name:req.body.name})
})

app.use('/api/registeration',registeration)






app.listen(app.get('port'), () => {
    console.log("im server listning on 9000 port", app.get('port'))
})