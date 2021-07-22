const fs=require('fs');

//creating folder
//fs.mkdirSync("icecream")

//creating and writing in the file
//fs.writeFileSync("icecream/eat.txt","user clicked on button");

//editing the file
//fs.appendFileSync("icecream/eat.txt",".....ice cream appred in front of sonu")

//i want to read the data of on cosole
// var data=fs.readFileSync("icecream/eat.txt","utf-8")
// console.log(data)


//deliting the file
//fs.unlinkSync("icecream/eat.txt")


//deliting folder
fs.rmdirSync("icecream")

