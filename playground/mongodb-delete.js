const {MongoClient, ObjectID, Double} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    
    //delete many

    // db.collection('Todos').deleteMany({text: "Eat dinner"}).then((result) => {
    //     console.log(result);
    // });

    //delete one
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })


    db.collection("Users").deleteMany({name: "Ujjal"}).then((result) => {
        console.log(result);
    });

    db.collection("Users").findOneAndDelete({_id: new ObjectID("5f8f0bfce83ff39a86f56c70")})
    .then((result) => {
        console.log(result);
    })

    db.close();
});