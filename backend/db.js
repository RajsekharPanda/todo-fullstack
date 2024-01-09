const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb://localhost:27017");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: boolean,
    require: true,
  },
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo: todo,
};
