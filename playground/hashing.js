const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abcd');

console.log(`Decoded: ${decoded}`)


// var message = "this is not encoded";

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// }


// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data)+ 'some secret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data)+'some secret4').toString()

// if(resultHash === token.hash){
//     console.log('data was not changed');
// } else {
//     console.log('Security : data was changed');
// }

