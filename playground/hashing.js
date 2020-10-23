const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");
const brycpt = require('bcryptjs');

var password = "123abc!";

// brycpt.genSalt(10, (err, salt) => {
//     brycpt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

var hashedPass = "$2a$10$V1Rk9QESq5ngTp0eANzJz.wqGBtR9hzG.a7VGwOJlQl4g3dLKCnOi";
 
brycpt.compare(password, hashedPass, (err, res) => {
    console.log(res);
});


// var data = {
//     id: 10
// };

// var token = jwt.sign(data, "123abc");
// console.log(token);

// var decoded = jwt.verify(token, "123abc");
// console.log(decoded);
// // jwt.verify



// var message = "I am the user no. 25";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// // var data = {
// //     id: 4
// // };

// // var token = {
// //     data,
// //     hash: SHA256(JSON.stringify(data)+"somesecret").toString()
// // }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString()

// // var resultHash = SHA256(JSON.stringify(token.data)+"somesecret").toString();

// // if (resultHash==token.hash) {
// //     console.log("Data was not changed");
// // } else {
// //     console.log("Data was changed. Do not trust.");
// // }