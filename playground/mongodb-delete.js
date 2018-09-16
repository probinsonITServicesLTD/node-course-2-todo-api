//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // Delete many
    // db.collection('Todos').deleteMany({
    //     text: "Something to do"
    // })
    // .then((result)=>{
    //     console.log(result);
    // })

    // Delete one
    // db.collection('Todos').deleteOne({
    //     text: "Hovering"
    // })
    // .then((result)=>{
    //     console.log(result);
    // })

    // Find a document and delete

    db.collection('Todos').findOneAndDelete({
        text: "Change jobs"
    })
    .then((result)=>{
        console.log(result);
    })


    //db.close();
})