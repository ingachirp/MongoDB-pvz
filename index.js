const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority");
mongoClient.connect(function (err, client) {
    const database = client.db("usersdb");
    const collection = database.collection("users");

    collection.find({age: {$gt:40}}).toArray(function(err, result) {
        console.log(result);
        client.close();
    })

    // const newUsers = [
    //   { name: "Tom", age: 30 },
    //   { name: "Adam", age: 40 },
    //   { name: "John", age: 60 },
    // ];
    // collection.insertMany(newUsers, function (err, result) {
    //   if (err) {
    //     return console.log("Failed to write an user");
    //   }
    //   collection.find().toArray(function (err, result) {
    //     if (err) {
    //       return console.log("errr", err);
    //     }
    //     console.log("Result:", result);
    //     client.close();
    //   });
    // });
  });