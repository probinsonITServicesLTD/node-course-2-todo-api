const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({})
//     .then((result)=>{
//         console.log(result)
//     });

Todo.findByIdAndRemove('5b9fa1d876ad90167e19d7cd')
    .then((todo)=>{
        console.log(todo);
    })