const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos')
    // .find()
    // .count().then((count) => {
    //     console.log('Todos count: '+count);
    // }, (err) => {
    //     console.log('Unable to fetch data', err);
    // });

    // db.collection('Users').find({name: "Ujjal"}).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch data', err);
    // });

    db.collection('Users').find({name: "Ujjal"}).count().then((count) => {
        console.log('Users');
        console.log('Count: '+count);
    }, (err) => {
        console.log('Unable to fetch data', err);
    });

    db.close();
});