const MongoClient=require('mongodb').MongoClient;

var url=" mongodb://127.0.0.1:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo=db.db("marketting")
    var myobj={
        marketing:"digital",value:"10k",expert:"sonu"
    }
    dbo.collection("market").insertOne(myobj,(err,res)=>{
        if(err) throw err;
        console.log("succefully inserted")
        db.close();
    })
})




