const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongo server");
    }
    console.log("Connected to mongodb server");

    // db.collection("Todos")
    // .findOneAndUpdate({
    //     _id: new ObjectID("5f9019d4027130658efd3cf5")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users")
    .findOneAndUpdate({
        _id: new ObjectID("5f8feec6fbf6cca98ea0696f")
    }, {
        $set: {
            name: "Steve"
        },
        $inc: {
            age: 7
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
})