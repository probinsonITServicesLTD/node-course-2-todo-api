//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id :new ObjectID('5b9e86d476ad90167e19c15d')
    },{
        $set:{
            text:'Goo balls'
        }
    }, {
        returnOriginal:false
    })
    .then((result)=>{
        console.log(result);
    })


    //db.close();
})