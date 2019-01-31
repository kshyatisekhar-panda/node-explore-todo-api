
var url = "mongodb://localhost:27017/mydb";


// var mongoose = require('mongoose');

// mongoose.connect(url, function (err) {

//    if (err) throw err;

//    console.log('Successfully connected');

// });


export {
  MongoClient,
 //mongoose
}



//Using NPM 'mongodb'

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Todo");
  var myobj = { name: "Company Inc1",age:35, address: "Highway 379" };
  dbo.collection("Users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  //  / db.close();
  });
});
