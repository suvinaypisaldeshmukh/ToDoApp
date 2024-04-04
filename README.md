# ToDoApp
Basic example of a Todo List API using Node.js and Express.js
GET /todos: Retrieves all todos.
POST /todos: Adds a new todo.
GET /todos/:id: Retrieves a specific todo by ID.
PUT /todos/:id: Updates a specific todo by ID.
DELETE /todos/:id: Deletes a specific todo by ID.

Request Body for Adding a Todo (POST /todos):
json
{
  "title": "Complete assignment",
  "description": "Finish the Node.js assignment by tomorrow."
}
Response Body for Adding a Todo (POST /todos):
json
{
  "id": 1,
  "title": "Complete assignment",
  "description": "Finish the Node.js assignment by tomorrow."
}
Request Body for Updating a Todo (PUT /todos/:id):
json
{
  "title": "Complete assignment",
  "description": "Finish the Node.js assignment by tonight."
}
Response Body for Updating a Todo (PUT /todos/:id):
json
{
  "id": 1,
  "title": "Complete assignment",
  "description": "Finish the Node.js assignment by tonight."
}
Response Body for Getting a Todo (GET /todos/:id):
json
{
  "id": 1,
  "title": "Complete assignment",
  "description": "Finish the Node.js assignment by tomorrow."
}
Response Body for Getting All Todos (GET /todos):
json
[
  {
    "id": 1,
    "title": "Complete assignment",
    "description": "Finish the Node.js assignment by tomorrow."
  },
  {
    "id": 2,
    "title": "Go to the gym",
    "description": "Hit the gym for a workout session."
  }
]
Response Body for Deleting a Todo (DELETE /todos/:id):
json
{
  "message": "Todo deleted successfully"
}
