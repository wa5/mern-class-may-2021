const MongoClient=require('mongodb').MongoClient;

var url=" mongodb://127.0.0.1:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo=db.db("mark1")

    var myobj2={
        marketing:"digital",value:"salman",expert:"sonu"
    }
    dbo.collection("market23").insertOne(myobj2,(err,res)=>{
        if(err) throw err;
        console.log("succefullyhhh inserted")
        
    })

    dbo.collection('market23').findOne({},(err,resp)=>{
        if(err)throw err;
        console.log(resp)
        db.close()
    })
})