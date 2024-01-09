const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodoSchema.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  //post into mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false
  });
  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", async function (req, res) {
   const todos = await todo.find()
   res.json({
      todos
   })
});
app.put("/completed",async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //post into mongodb
  await todo.update({
   _id:req.body.id
 },{
   completed:true
 });
 res.json({
   msg: "Todo marked as completed",
 });
});
