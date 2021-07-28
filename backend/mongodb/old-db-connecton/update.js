const MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017"
MongoClient.connect(url,(err,db)=>{

if(err)throw err;
var dbo=db.db("dance12");
var mydata={
    address:"india",capital:"delli",lang:"hindi"
}

var newvalue={
    $set:{address:"china",capital:"bijing"}
}

dbo.collection("capitalst").updateOne(mydata,newvalue,(err,res)=>{
    if(err)throw err;
    console.log("i got success fully updated")
})

dbo.collection('capitalst').findOne({},(err,resp)=>{
    if(err)throw err;
    console.log(resp)
    db.close()
})


})