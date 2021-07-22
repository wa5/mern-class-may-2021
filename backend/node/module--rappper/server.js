var http=require('http');
var url=require('url');
var add='https://www.google.com/search?year=2017&month=july'

var w=url.parse(add,true);
console.log(w.host)
console.log(w.pathname)
console.log(w.search)
var wdata=w.query;
console.log(wdata.month)
http.createServer((req,res)=>{
  
res.writeHead(404,{'Content-Type': 'text/html'});
res.write("hello im server")
    res.end();
}).listen(8009,()=>{
    console.log("im working")
});