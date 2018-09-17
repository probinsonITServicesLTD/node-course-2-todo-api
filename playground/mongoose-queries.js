const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b9f7a43c6a2dfb835973a9811';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log('Todo by id', todo);
// }).catch((err)=>console.log(err));

User.findById('5b9e92a318de332820efbbfb').then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2))
},(err)=>{
    console.log(err);
})
