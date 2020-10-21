const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

var id = "4f9048c2155f28b41ba20b11";

if (!ObjectID.isValid(id)) {
    console.log("Invalid id");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todokaba) => {
//     console.log("Todo", todokaba);
// });

Todo.findById(id).then((todosdddd) => {
    if (!todosdddd) {
        return console.log("Unable to find the id");
    }
    console.log("Todo by ID", todosdddd);
}).catch((e) => {
    console.log(e);
});