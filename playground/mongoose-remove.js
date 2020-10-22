const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");


// // delete many
// Todo.remove({}).then((result)=> {
//     console.log(result);
// });

var id = "5f9048c2155f28b41ba20b11";
//delete by id
Todo.findByIdAndRemove(id).then((todo) => {
    console.log(todo);
})