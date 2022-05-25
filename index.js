// duomenu i DB perziura per postman
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 3000;
const mongoClient = new MongoClient("mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority");
let database;
mongoClient.connect(function (err, client) {
  database = client.db("usersdb");
});
app.get("/", (req, res) => {
  function sendResponse(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  }
  database.collection("users").find().toArray(sendResponse);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/:name', (request, response) => {
    
        getUserByName();
    
        function getUserByName() {
            return database.collection("users").find({name: request.params.name}).toArray(function(err, result){
                if (err) {
                    response.send(err);
                } else {
                    response.send(result);
                }
            })
        }
    });