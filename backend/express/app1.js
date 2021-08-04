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

console.log(path.join(__dirname, './src/public'))
//routes
const {home,about,things}=require('./src/routers');

var options={
    dotfiles:"ignore",
    extention:["htm","html"],
    index:false,
    maxAge:"7d",
    redirct:false
}


app.use(express.static(pth,options))

//only one root
app.get("/", (req, resp) => {
    resp.render('index')
})



// app.get('/stfile',(req,res)=>{
//     res.render('flowers')
//     })
    





//displaying html in app files
// app.get('/stfile',(req,res)=>{

// let img=` <img src="/img/1.jpg" alt="flowers">`
// let secrate=`<a href="/.htaccess">secrate</a>`
//  let html=`<!DOCTYPE html>

// <html>
//     <head>
       
        
//     </head>
//     <body>
//  <h1>im the image</h1>
//       <div>${img}</div>
//         <div>${secrate}</div>
//          <script src="" async defer></script>
//      </body>
//  </html>`

// res.send(html)
// //res.render('flowers')
// })







app.use('/thing',things);
app.use('/about',about);
app.use('/home',home);





//without out rout
// app.get('/about',(req,res)=>{
//     res.send("hello im aboutb  page")
// })
// app.post('/about',(req,res)=>{
//     res.send("hello im aboutb  page post")
// })
// app.delete('/about',(req,res)=>{
//     res.send("hello im aboutb  page delite" )
// })

// app.put('/about',(req,res)=>{
//     res.send("hello im aboutb  page put")
// })
//without method --advance routing

// app.route('/about')
// .get((req,res)=>{
//     res.send("hello im aboutb  page  im using advance rounting")
// })
// .post((req,res)=>{
//     res.send("hello im aboutb  page post")
// })
// .delete((req,res)=>{
//     res.send("hello im aboutb  page delite" )
// })
// .put((req,res)=>{
//     res.send("hello im aboutb  page put")
// });



// app.get('/ab?cd',(req,res)=>{
//     res.send("hello im aboutb  page")
// })
// app.get('/ab+cd',(req,res)=>{
//     res.send("hello im aboutb  page")
// })
// app.get('/ab*cd',(req,res)=>{
//     res.send("hello im aboutb  page")
// })

// app.get(/a/,(req,res)=>{
//     res.send("hello im aboutb  page")
// })
//dynamic routing

// app.get('/about/:name',(req,res)=>{
//         res.render("about",{name:req.params.name})
//      })

//  app.get('/about/:name/:val1/:val2',(req,res)=>{
//     res.render("about",{name:req.params.name,
//         val1:req.params.val1,
//         val2:req.params.val2

//     })
//  })











app.get('/about/thing', () => {
    res.send("hello im aboutb  page put")
})












//only one root
app.get('*', (req, resp) => {
    resp.render('404')
})

app.listen(app.get('port'), () => {
    console.log("im server listning on 9000 port")
})