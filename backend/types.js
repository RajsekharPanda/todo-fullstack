const zod = require("zod");

const createTodoSchema = zod.object({
  title: zod.string().require(),
  description: zod.string.require(),
});

const updateTodoSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodoSchema: createTodoSchema,
  updateTodoSchema: updateTodoSchema,
};
