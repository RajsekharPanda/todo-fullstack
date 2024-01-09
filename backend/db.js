const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb://localhost:27017");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo: todo,
};
