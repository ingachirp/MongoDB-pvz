const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority");
mongoClient.connect(function (err, client) {
  const database = client.db("usersdb");
  const collection = database.collection("users");
    const newUser = { name: "Steve", age: 30 };
    collection.insertOne(newUser, function (err, result) {
      if (err) {
        return console.log("Failed to write an user");
      }
      console.log(result);
      client.close();
    });
//   collection.find().toArray(function (err, result) {
//     if (err) {
//       return console.log("errr", err);
//     }
//     console.log("Result:", result);
//     client.close();
//   });
});