const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority");
mongoClient.connect(function (err, client) {
    const database = client.db("usersdb");
    const collection = database.collection("users");
    collection.countDocuments(function (err, result) {
      if (err) {
        return console.log(err);
      }
      console.log(`Collection has ${result} documents`);
      client.close();
    });
  });