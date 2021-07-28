const MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo=db.db("milk1234")
    var data={address:"india"};

    dbo.collection('chikan').deleteOne(data,(err,resp)=>{
        if(err)throw err;
        console.log("idelited")
        db.close()
    })
})
